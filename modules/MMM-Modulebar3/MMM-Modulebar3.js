/* global Module */

/* Magic Mirror 2
 * Module: MMM-Modulebar
 *
 * By Erik Pettersson
 * Based on the TouchNavigation Module by Brian Janssen
 *
 * MIT Licensed.
 */
var modulebarr;
var module1, module2, modulemain;
//var request = require('request');

Module.register("MMM-Modulebar3",{
	
	requiresVersion: "2.1.0",
	
    defaults: {
        // Allow the module to force modules to be shown (if hidden and locked by another module ex. profile-switcher).
        allowForce: true,
        // Determines if the border around the buttons should be shown.
        showBorder: true,
        // The minimum width for all the buttons.
        minWidth: "0px",
        // The minimum height for all the buttons.
        minHeight: "0px",
        // The location of the symbol relative to the text. Options: left, right, top or bottom
        picturePlacement: "top",
        // The direction of the bar. Options: row, column, row-reverse or column-reverse
        direction: "row",
		// The speed of the hide and show animation.
		animationSpeed: 300,
	
        // The default button 1. Add your buttons in the config.
		buttons: {
			
			"1": {
				module: "MMM-Modulebar1",
				text:   "뒤로가기",
				symbol: "clock-o"
			},

			"2": {
				module: "MMM-Modulebar2",
				text:   "메인화면",
				symbol: "clock-o"
			}
		}
	},
	start(){
		Modulebarmenu = this;	
	},
	

    // Define required styles.
	getStyles: function(){
		return ["font-awesome.css", "MMM-Modulebar.css"];
	},

	notificationReceived: function(notification, payload){
		Log.info(this.name + " - received norification : " + notification);
		
		if (notification === 'Modulebar1 is Clicked') {
			module1 = 'Modulebar1 is Clicked';
			Log.info(module1 + " adadadadad : " + notification);
		}
		else if (notification === 'Modulebar2 is Clicked') {
			module1 = 'Modulebar2 is Clicked';
			Log.info(module1 + " adadadadad : " + notification);
		}
		else if (notification === 'Modulebar0 is Clicked'){
			module1 = 'Modulebar0 is Clicked';
			Log.info(module1 + " adadadadad : " + notification);
		}
	},

    // Override dom generator.
    getDom: function() {
        var menu = document.createElement("span");
        menu.className = "modulebar-menu";
        menu.id = this.identifier + "_menu";
        menu.style.flexDirection = this.config.direction;
		// Sends each button to the "createButton" function be created.
		for (var num in this.config.buttons) {
			menu.appendChild(this.createButton(this, num, this.config.buttons[num], this.config.picturePlacement));
		}
		
        return menu;
    },

	// Creates the buttons.
    createButton: function (self, num, data, placement) {
		// Creates the span elemet to contain all the buttons.
		var item = document.createElement("span");
        // Builds a uniqe indentity / button.
		item.id = self.identifier + "_button_" + num;
        // Sets a class to all buttons.
		item.className = "modulebar-button";
        // Makes sure the width and height is at least the defined minimum.
		item.style.minWidth = self.config.minWidth;
        item.style.minHeight = self.config.minHeight;
		// Collects all modules loaded in MagicMirror.
		var modules = MM.getModules();
		

		// When a button is clicked, the module either gets hidden or shown depending on current module status.
		item.addEventListener("click", function () {
			// Lists through all modules for testing.
			for (var i = 0; i < modules.length; i++) {
				// Check if the curent module is the one.
				if (modules[i].name === data.module) {
					// Splits out the module number of the module with the same name.
					var idnr = modules[i].data.identifier.split("_");
					// Checks if idnum is set in config.js. If it is, it only hides that module, if not hides all modules with the same name.
					if (idnr[1] == data.idnum || data.idnum == null) {
						// Check if the module is hidden.
						if (!modules[i].hidden) {
							// Hides the module.
							modules[i].hide(self.config.animationSpeed, {force: self.config.allowForce});
							// Prints in the console what just happend (adding the ID). 
							console.log("Hiding "+modules[i].name+" ID: "+idnr[1]);
							// Check if there is a "hideURL" defined.
							if (data.hideUrl != null) {
								// Visiting the the URL.
								fetch(data.hideUrl);
								// Prints the visited hideURL.
								console.log("Visiting hide URL: "+data.hideUrl);
							}
							for (var k = 3; k < 17; k++){
								console.log("Hiding opend "+ modules[k].name+" ID: "+idnr[1]);
								modules[k].hide(self.config.animationSpeed, {force: self.config.allowForce});	
							}
						}
						else {
							// Check if there is a "showURL" defined.
							if (data.showUrl != null) {
								// Visiting the show URL.
								fetch(data.showUrl);
								// Prints the visited hideURL.
								console.log("Visiting show URL: "+data.showUrl);
							}
							if (modules[i].name === 'MMM-Modulebar1') {
								
								for (var k = 0; k < 17; k++){
									console.log("Hiding opend "+ modules[k].name+" ID: "+idnr[1]);
									modules[k].hide(self.config.animationSpeed, {force: self.config.allowForce});	
								}
								switch (module1) {

								case 'Modulebar0 is Clicked' : 
								console.log("Showing0 "+modules[0].name+" ID: "+idnr[1]);	
								setTimeout(function(){
									modules[0].show(self.config.animationSpeed, {force: self.config.allowForce});
								},500);
								break;

								case 'Modulebar1 is Clicked' : 
								console.log("Showing1 "+modules[1].name+" ID: "+idnr[1]);	
								module1 = 'Modulebar0 is Clicked';
								setTimeout(function(){
									modules[1].show(self.config.animationSpeed, {force: self.config.allowForce});
								},500);
								break;

								case 'Modulebar2 is Clicked' : 
								console.log("Showing2 "+modules[2].name+" ID: "+idnr[1]);	
								module1 = 'Modulebar0 is Clicked';
								setTimeout(function(){
									modules[2].show(self.config.animationSpeed, {force: self.config.allowForce});
								},500);
								break;
								}
							}
							else {
								console.log("Hiding opend "+ modules[2].name+" ID: "+idnr[1]);			
								modules[2].hide(self.config.animationSpeed, {force: self.config.allowForce});
								for (var k = 0; k < 17; k++){
									console.log("Hiding opend "+ modules[k].name+" ID: "+idnr[1]);
									modules[k].hide(self.config.animationSpeed, {force: self.config.allowForce});	
								}
								console.log("Showing "+modules[i].name+" ID: "+idnr[1]);	
								setTimeout(function(){
								modules[0].show(self.config.animationSpeed, {force: self.config.allowForce});
								},500);								
							}
						}					
					}
				}
			}
		});
		// Fixes the aligning.
        item.style.flexDirection = {
            "right"  : "row-reverse",
            "left"   : "row",
            "top"    : "column",
            "bottom" : "column-reverse"
        }[placement];
		// Sets the border around the symbol/picture/text to black.
        if (!self.config.showBorder) {
            item.style.borderColor = "black";
        }
		// Adds the Font-Awesome symbol if specified.
        if (data.symbol) {
            var symbol = document.createElement("span");
            symbol.className = "modulebar-picture fa fa-" + data.symbol;
			// Sets the size on the symbol if specified.
            if (data.size) {
                symbol.className += " fa-" + data.size;
                symbol.className += data.size == 1 ? "g" : "x";
            }
			// Align the symbol with a margin.
            if (data.text && placement === "left") {
                symbol.style.marginRight = "4px";
            }
			// Adds the symbol to the item.
            item.appendChild(symbol);

		// Adds a picture if specified.
		} else if (data.img) {
            var image = document.createElement("img");
            image.className = "modulebar-picture";
            image.src = data.img;
			// Sets the size of the picture if specified.
            if (data.width)  image.width  = data.width;
            if (data.height) image.height = data.height;
			// Align the picture with a margin.
            if (data.text && placement === "left") {
                image.style.marginRight = "4px";
            }
			// Adds the picture to the item.
            item.appendChild(image);
        }
		// Adds the text if specified.
        if (data.text) {
            var text = document.createElement("span");
            text.className = "modulebar-text";
            text.innerHTML = data.text;
			// Align the text with a margin.
            if ((data.symbol || data.img) && placement === "right") {
                text.style.marginRight = "4px";
            }
			// Adds the text to the item.
            item.appendChild(text);
        }
		// All done. :)
        return item;
    }
});	


