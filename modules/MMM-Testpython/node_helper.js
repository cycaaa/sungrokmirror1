var NodeHelper = require("node_helper");
var {PythonShell} = require('python-shell');
var socketTestpython;
module.exports = NodeHelper.create({
  start: function() {
    socketTestpython=this;
    console.log(this.name+"node_helper started")
  },
  
  socketNotificationReceived: function(notification, payload) {
    switch(notification) {
      case "TEST":
        console.log("notification : " + notification)
	    PythonShell.run('c://Users/user/Desktop/MagicMirror-master (2)/MagicMirror-master/modules/MMM-Testpython/FCF.py', null, function (err, result) {
            if (err) throw err;
            console.log(result);          
            socketTestpython.sendSocketNotification("I_DID",result);
          });
	       
        break
    }
  }
}) 
