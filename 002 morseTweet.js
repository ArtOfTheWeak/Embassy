/* Everytime the specified account tweets
the tweet printed to terminal
and is also outputted as morse code through an LED via a rasp Pi.
Twitter related code based on Daniel Shiffman Tutorials https://shiffman.net/a2z/twitter-bots/ 
Morse Code/Led taken from Arvind Ravulavara/Jackal of Javascript https://github.com/arvindr21/Pi_MorseCode   
*/

// set up

var startTime = new Date().toLocaleString();
console. log( startTime + ' The morseTweet bot is starting');//checks that it is working
var Twit = require('twit'); //requires twit package
var config = require('./config'); // Get the config file auth keys
var T = new Twit(config);//run config file
 //end of setup




var userID = 'XXXXX';// Twitter ID of account you want to follow and convert to morse 
//

//starts twitter stream
var stream = T.stream('statuses/filter', { follow: ( userID ) }); 
 stream.on('tweet', function (tweet) {

var tweetTime = new Date().toLocaleString(); //time tweet was sent
var printTweet = tweet.text; // actual tweet 

//if the tweet is from our specific user 
    if (tweet.user.id == userID) {
    	//do all this stuff
      console.log(tweetTime + " - " + "This was went by the user we want to track!")
      console.log(printTweet);
      
      // sets GPIO and preps LED
      var Gpio = require('onoff').Gpio,
      led = new Gpio(17, 'out'),
      sleep = require('sleep'),
      _baseTime = 128000, //micro seconds
      sleepTime = _baseTime, 
      btwCodes = _baseTime * 2,
      btwLetters = _baseTime * 4,
      btwWords = _baseTime * 8;
      var text = printTweet; // this variable calls the actual tweet

//Morse code patterns
var MorseCode = {
pattern: {
'a': '._',
'b': '_...',
'c': '_._.',
'd': '_..',
'e': '.',
'f': '.._.',
'g': '__.',
'h': '....',
'i': '..',
'j': '.___',
'k': '_._',
'l': '._..',
'm': '__',
'n': '_.',
'o': '___',
'p': '.__.',
'q': '__._',
'r': '._.',
's': '...',
't': '_',
'u': '.._',
'v': '..._',
'w': '.__',
'x': '_.._',
'y': '_.__',
'z': '__..',
'1': '.____',
'2': '..___',
'3': '...__',
'4': '...._',
'5': '.....',
'6': '_....',
'7': '__...',
'8': '___..',
'9': '____.',
'0': '_____'
},
active: function(t) {
led.writeSync(1);
},
inactive: function() {
led.writeSync(0);
}
}
var _t = text.split(''); //here I'm calling text which is the actual tweet to processed
for(var i = 0; i < _t.length; i++) {
var _l = _t[i];
if(_l == ' ') { // if the char is a space 
sleep.usleep(btwWords);
}
else {
var _c = MorseCode.pattern[_l].split('');
sleep.usleep(btwLetters);
console.log('Letter Starts >> ', _l);
for(var j = 0; j < _c.length; j++) {
console.log("code >> ", _c[j]);
MorseCode.active();
if(_c[j] == '.') {
sleep.usleep(sleepTime);
MorseCode.inactive();
sleep.usleep(btwCodes);
}
else {
sleep.usleep(sleepTime * 3);
MorseCode.inactive();
sleep.usleep(btwCodes);
}
}
}
};
}
    
  });
