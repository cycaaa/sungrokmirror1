/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "127.0.0.1", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 9000,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 24,
	units: "metric",

	modules: [
		{
			module: "MMM-Modulebar",
			position: "center", // This can be any of the regions.
			header: "헤어스타일", // Optional
			classes: "default everyone", // Optional
			config: {
		
				// See 'Configuration options' for more information.
			}
		},
		{
			module: "MMM-Modulebar1",
			position: "center", // This can be any of the regions.
			header: "남자헤어", // Optional
			
			classes: "default everyone", // Optional
			config: {
				hidden : "true",
				// See 'Configuration options' for more information.
			}
		},
		{
			module: "MMM-Modulebar2",
			position: "center", // This can be any of the regions.
			header: "여자헤어", // Optional
			
			classes: "default everyone", // Optional
			config: {
				hidden : "true",
				// See 'Configuration options' for more information.
			}
		},
		{
			module: 'MMM-iFrame3',
			position: 'bottom_right',	// This can be any of the regions.
			hide : "true",
			config: {
				// See 'Configuration options' for more information.
					url: ["http://s3.us-east-2.amazonaws.com/beautymirror.com/demo/index.html"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "3500", // width of iframe
					height: "2000", // height of iframe
					frameWidth: "950", // width of embedded iframe, height is beeing calculated by aspect ratio of iframe		
			}
		},
		{
			module: 'MMM-iFrame4',
			position: 'bottom_right',	// This can be any of the regions.
			hide : "true",
			config: {
				// See 'Configuration options' for more information.
					url: ["http://s3.us-east-2.amazonaws.com/beautymirror.com/demo/index.html"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "3500", // width of iframe
					height: "2000", // height of iframe
					frameWidth: "950", // width of embedded iframe, height is beeing calculated by aspect ratio of iframe		
			}
		},
		{
			module: 'MMM-iFrame5',
			position: 'bottom_right',	// This can be any of the regions.
			hide : "true",
			config: {
				// See 'Configuration options' for more information.
					url: ["http://s3.us-east-2.amazonaws.com/beautymirror.com/demo/index.html"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "3500", // width of iframe
					height: "2000", // height of iframe
					frameWidth: "950", // width of embedded iframe, height is beeing calculated by aspect ratio of iframe		
			}
		},
		{
			module: 'MMM-iFrame6',
			position: 'bottom_right',	// This can be any of the regions.
			hide : "true",
			config: {
				// See 'Configuration options' for more information.
					url: ["http://s3.us-east-2.amazonaws.com/beautymirror.com/demo/index.html"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "3500", // width of iframe
					height: "2000", // height of iframe
					frameWidth: "950", // width of embedded iframe, height is beeing calculated by aspect ratio of iframe		
			}
		},
		{
			module: 'MMM-iFrame7',
			position: 'bottom_right',	// This can be any of the regions.
			hide : "true",
			config: {
				// See 'Configuration options' for more information.
					url: ["http://s3.us-east-2.amazonaws.com/beautymirror.com/demo/index.html"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "3500", // width of iframe
					height: "2000", // height of iframe
					frameWidth: "950", // width of embedded iframe, height is beeing calculated by aspect ratio of iframe		
			}
		},
		{
			module: 'MMM-iFrame8',
			position: 'bottom_right',	// This can be any of the regions.
			hide : "true",
			config: {
				// See 'Configuration options' for more information.
					url: ["http://s3.us-east-2.amazonaws.com/beautymirror.com/demo/index.html"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "3500", // width of iframe
					height: "2000", // height of iframe
					frameWidth: "950", // width of embedded iframe, height is beeing calculated by aspect ratio of iframe		
			}
		},
		{
			module: 'MMM-iFrame9',
			position: 'bottom_right',	// This can be any of the regions.
			hide : "true",
			config: {
				// See 'Configuration options' for more information.
					url: ["http://s3.us-east-2.amazonaws.com/beautymirror.com/demo/index.html"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "3500", // width of iframe
					height: "2000", // height of iframe
					frameWidth: "950", // width of embedded iframe, height is beeing calculated by aspect ratio of iframe		
			}
		},
		{
			module: 'MMM-iFrame10',
			position: 'bottom_right',	// This can be any of the regions.
			hide : "true",
			config: {
				// See 'Configuration options' for more information.
					url: ["http://s3.us-east-2.amazonaws.com/beautymirror.com/demo/index.html"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "3500", // width of iframe
					height: "2000", // height of iframe
					frameWidth: "950", // width of embedded iframe, height is beeing calculated by aspect ratio of iframe		
			}
		},
		{
			module: 'MMM-iFrame11',
			position: 'bottom_right',	// This can be any of the regions.
			hide : "true",
			config: {
				// See 'Configuration options' for more information.
					url: ["http://s3.us-east-2.amazonaws.com/beautymirror.com/demo/index.html"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "3500", // width of iframe
					height: "2000", // height of iframe
					frameWidth: "950", // width of embedded iframe, height is beeing calculated by aspect ratio of iframe		
			}
		},
		{
			module: 'MMM-iFrame12',
			position: 'bottom_right',	// This can be any of the regions.
			hide : "true",
			config: {
				// See 'Configuration options' for more information.
					url: ["http://s3.us-east-2.amazonaws.com/beautymirror.com/demo/index.html"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "3500", // width of iframe
					height: "2000", // height of iframe
					frameWidth: "950", // width of embedded iframe, height is beeing calculated by aspect ratio of iframe		
			}
		},
		{
			module: 'MMM-iFrame13',
			position: 'bottom_right',	// This can be any of the regions.
			hide : "true",
			config: {
				// See 'Configuration options' for more information.
					url: ["http://s3.us-east-2.amazonaws.com/beautymirror.com/demo/index.html"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "3500", // width of iframe
					height: "2000", // height of iframe
					frameWidth: "950", // width of embedded iframe, height is beeing calculated by aspect ratio of iframe		
			}
		},
		{
			module: 'MMM-iFrame14',
			position: 'bottom_right',	// This can be any of the regions.
			hide : "true",
			config: {
				// See 'Configuration options' for more information.
					url: ["http://s3.us-east-2.amazonaws.com/beautymirror.com/demo/index.html"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "3500", // width of iframe
					height: "2000", // height of iframe
					frameWidth: "950", // width of embedded iframe, height is beeing calculated by aspect ratio of iframe		
			}
		},
		{
			module: 'MMM-iFrame15',
			position: 'bottom_right',	// This can be any of the regions.
			hide : "true",
			config: {
				// See 'Configuration options' for more information.
					url: ["http://s3.us-east-2.amazonaws.com/beautymirror.com/demo/index.html"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "3500", // width of iframe
					height: "2000", // height of iframe
					frameWidth: "950", // width of embedded iframe, height is beeing calculated by aspect ratio of iframe		
			}
		},
		{
			module: 'MMM-iFrame16',
			position: 'bottom_right',	// This can be any of the regions.
			hide : "true",
			config: {
				// See 'Configuration options' for more information.
					url: ["http://s3.us-east-2.amazonaws.com/beautymirror.com/demo/index.html"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "3500", // width of iframe
					height: "2000", // height of iframe
					frameWidth: "950", // width of embedded iframe, height is beeing calculated by aspect ratio of iframe		
			}
		},
		{
			module: 'MMM-iFrame17',
			position: 'bottom_right',	// This can be any of the regions.
			visible : 'false',
			config: {
				// See 'Configuration options' for more information.
					url: ["http://s3.us-east-2.amazonaws.com/beautymirror.com/demo/index.html"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "3500", // width of iframe
					height: "2000", // height of iframe
					frameWidth: "950", // width of embedded iframe, height is beeing calculated by aspect ratio of iframe		
			}
		},
		{
			module: 'MMM-iFrame18',
			position: 'bottom_right',	// This can be any of the regions.
			visible : 'false',
			config: {
				// See 'Configuration options' for more information.
					url: ["http://s3.us-east-2.amazonaws.com/beautymirror.com/demo/index.html"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "3500", // width of iframe
					height: "2000", // height of iframe
					frameWidth: "950", // width of embedded iframe, height is beeing calculated by aspect ratio of iframe		
			}
		},
		{
			module: 'MMM-iFrame19',
			position: 'bottom_right',	// This can be any of the regions.
			visible : 'false',
			config: {
				// See 'Configuration options' for more information.
					url: ["http://s3.us-east-2.amazonaws.com/beautymirror.com/demo/index.html"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "3500", // width of iframe
					height: "2000", // height of iframe
					frameWidth: "950", // width of embedded iframe, height is beeing calculated by aspect ratio of iframe		
			}
		},
		{
			module: 'MMM-iFrame20',
			position: 'bottom_right',	// This can be any of the regions.
			visible : 'false',
			config: {
				// See 'Configuration options' for more information.
					url: ["http://s3.us-east-2.amazonaws.com/beautymirror.com/demo/index.html"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "3500", // width of iframe
					height: "2000", // height of iframe
					frameWidth: "950", // width of embedded iframe, height is beeing calculated by aspect ratio of iframe		
			}
		},
		{
			module: 'MMM-iFrame21',
			position: 'bottom_right',	// This can be any of the regions.
			visible : 'false',
			config: {
				// See 'Configuration options' for more information.
					url: ["http://s3.us-east-2.amazonaws.com/beautymirror.com/demo/index.html"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "3500", // width of iframe
					height: "2000", // height of iframe
					frameWidth: "950", // width of embedded iframe, height is beeing calculated by aspect ratio of iframe		
			}
		},
		{
			module: 'MMM-iFrame22',
			position: 'bottom_right',	// This can be any of the regions.
			visible : 'false',
			config: {
				// See 'Configuration options' for more information.
					url: ["http://s3.us-east-2.amazonaws.com/beautymirror.com/demo/index.html"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "3500", // width of iframe
					height: "2000", // height of iframe
					frameWidth: "950", // width of embedded iframe, height is beeing calculated by aspect ratio of iframe		
					hidden : "true",
			}
		},
		{
			module: "MMM-Modulebar3",
			position: "top_left", // This can be any of the regions.
			header: "메뉴선택", // Optional
			classes: "default everyone", // Optional
			config: {
		
				// See 'Configuration options' for more information.
			}
		},


		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "compliments",
			position: "lower_third"
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true
			}
		},
		{
			module: "MMM-Testpython",
			position: "top_right",
			config:{
				foo:"yellow"
			}
			
		},
		{
			module: "MMM-Dynamic-Modules",
		},

		{
			module: 'MMM-Carousel',
			position: 'bottom_bar', // Required only for navigation controls
			config: {
				ignoreModules: ['alert'],
				mode: 'slides',
				showPageIndicators: true,
				showPageControls: true,
				slides: {
					main: ['compliments'],
					"Slide 2": ['MMM-iFrame22'],
					"Slide 3": ['MMM-Modulebar', 'MMM-Modulebar1', 'MMM-Modulebar2', 'MMM-Modulebar3'],
					"Slide 4": ['MMM-Testpython','MMM-iFrame17','MMM-iFrame18','MMM-iFrame19','MMM-iFrame20','MMM-iFrame21','MMM-iFrame22']
				},
				keyBindings: { 
					enabled: true,
					map: {
						NextSlide: "ArrowRight", 
						PrevSlide: "ArrowLeft", 
						Slide0:    "Home"
					},
					mode: "DEFAULT"
				}
			}
			
		},

	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
