var Testpythons;
Module.register("MMM-Testpython", {

    defaults: {},
    start: function (){
        Testpythons = this;
    },
  
  getDom: function() {
    var element = document.createElement("div")
    element.className = "myContent"
    element.id="divid"
    element.innerHTML = "Hello, World!!! " + this.config.foo
    var subElement = document.createElement("p")
    subElement.innerHTML = "Click" 
    subElement.id = "clickid"
    element.appendChild(subElement)
    return element
  },
  
  notificationReceived: function(notification, payload, sender) {
    switch(notification) {
      case "DOM_OBJECTS_CREATED":
      var elem = document.getElementById("clickid")
      elem.addEventListener("click", () => {
        Testpythons.sendSocketNotification("TEST")
        console.log("hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~")
        elem.innerHTML = "click success"   
        }) 
      break
    }
  },
  socketNotificationReceived: function(notification, payload) {
    switch(notification) {
      case "I_DID":
        console.log("Socket recevied 1: "+payload)
        var elemk = document.getElementById("clickid")
        elemk.innerHTML = payload

        var change;
        if(payload <= 19){
          change = 1;
          console.log(payload);
          console.log(change);
        }
        else if(19 < payload && payload < 30){
          change = 2;
          console.log(payload);
          console.log(change);
        }
        else if(29 < payload && payload < 40){
          change = 3; 
          console.log(payload);
          console.log(change);
        }
        else if(39 < payload && payload < 50){
          change = 4;  
          console.log(payload);
          console.log(change);
        }
        else if(49 < payload){
          change = 5;
          console.log(payload);
          console.log(change);
        }

          switch(change){
            case 1 : 
              this.sendNotification('CHANGE_POSITIONS', 
              modules = {
                'MMM-iFrame17':{
                  visible: 'true',
                  position: 'top_left',
                }
              })
              break
            case 2 : 
              this.sendNotification('CHANGE_POSITIONS', 
              modules = {
                'MMM-iFrame18':{
                  visible: 'true',
                  position: 'top_left',
              }
            })
            break
            case 3 : 
              this.sendNotification('CHANGE_POSITIONS', 
              modules = {
                'MMM-iFrame19':{
                  visible: 'true',
                  position: 'bottom_left',
              }
            })
            break
            case 4 : 
              this.sendNotification('CHANGE_POSITIONS', 
              modules = {
                'MMM-iFrame20':{
                  visible: 'true',
                  position: 'top_right',
              }
            })
            break
            case 5 : 
              this.sendNotification('CHANGE_POSITIONS', 
              modules = {
                'MMM-iFrame21':{
                  visible: 'true',
                  position: 'top_left',
              }
            })
            break
            default : 
              this.sendNotification('CHANGE_POSITIONS', 
              modules = {
                'MMM-iFrame22':{
                  visible: 'true',
                  position: 'top_left',
                }
              })
            break
          }    
      break
    }
  }
})

