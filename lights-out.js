var hue         = require("node-hue-api"),
    async       = require('async'),
    dash_button = require('node-dash-button'),
    HueApi      = hue.HueApi,
    lightState  = hue.lightState;

var host     = "192.168.1.1",
    username = "354ccffd2126c1475d855b923845163",
    api      = new HueApi(host, username),
    dash = dash_button("10:ae:60:02:8d:66");


/* Display Helper */
var displayResult = function(result) {
    console.log(JSON.stringify(result, null, 2));
};

/* Turn off all lights in a list. */ 

var turnOffAllLight = function(result){
      
  //turn them off.
  var state = lightState.create().off();
  
  //setup queue
  var q = async.queue(function (light, callback) {
      api.setLightState(light.id, state, callback);  
  }, 3);
  
  //add to queue
  result.lights.forEach(function(light){
      q.push(light);
  });
  
  //drain queue
  q.drain = function() {
      console.log('all lights are off');
  }
}

//when press detected, turns off all the lights
dash.on("detected", function (){
    api.lights().then(turnOffAllLight).done(); 
});
