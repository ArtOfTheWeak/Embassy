/*
One of two main.js files for Embassy project
This one monitors Russian Embassies on raspberry pi
When any of them tweet an a series of audio files stored on PI are 
played over fm radio  

Code snippets from Daniel Shiffman https://shiffman.net/a2z/twitter-bots/ 

The audio will play over fm radio using https://github.com/markondej/fm_transmitter  

There are more elegant/efficient ways of doing it with less repetiton - but this worked for me. 
*/

//SetUp info
var startTime = new Date().toLocaleString();
console. log('Number Station has been activated'); 
var Twit = require('twit'); //twit package
var config = require('./config'); // the config file to allow me access Twitter API Data
var T = new Twit(config);//run config file
 
 //end of setup



/*
list of embassies goes here.
Available from https://github.com/ArtOfTheWeak/Embassy/blob/main/004%20russianEmbassylist.js
*/



//Set's up listening stream for all twitter accounts 
var stream = T.stream('statuses/filter', { follow: [ userID1, egypt , eritrea, ghana, guineaSierra, kenya, mauritius, namibia, nigeria, rwanda, senegal, seychelles, sa, sudan, tanzania, tunisia, uganda, zimbabwe, argentina, brazil, chile, canada, colombia, costaRica, cuba, ecuador, guyan, jamaica, mexico, panama, paraguay, peru, USA, uruguay, venezuela, afghanistan, armenia, azerbijan, bahrain, cambodia, georgia, india, indonesia, iran, iraq, israel, japan, jordan, kuwait, kyrgyzstan, lebanon, malaysia, mongolia, nk, oman, pakistan, palestine, phillipines, qatar, saudi, singapore, sk, sriLanka, syria, tajikstan, thailand, turkey, turkmenistan, uae, vietnam, yemen, austria, belarus, belgium, bosniaher, croatia, denmark, estonia, france, germany, greece, vatican, hungary, iceland, ireland, italy, latvia, luxembourg, malta, montenegro, netherlands, norway, poland, serbia, slovenia, spain, sweden, swiss, uk, austria, nz  ].join(',') });
stream.on('tweet', function (tweet) {

// two variables to store tweet time  and actual tweet
var tweetTime = new Date().toLocaleString();
var printTweet = tweet.text;


/////////////EMBASSSIES\\\\\\\\\\\\\\\\\\\\\\\\
 
/*
I have left in first and last countries as an example,
it's the same process for all countries 
*/ 

 // egypt 

if (tweet.user.id == egypt ) {
 
    printTweet.toString()//converts printTweet to String
    console.log(printTweet) //prints tweet as variable
  
    console.log("Egypt is Tweeting " + tweetTime);
  
    audio1(); 

  }


//Last country on the list 

if (tweet.user.id == nz ) {
 
    printTweet.toString()//converts printTweet to String
    console.log(printTweet) //prints tweet as variable
  
    console.log("New Zealand is Tweeting" + tweetTime);
  
    audio1();

    }


};


function audio1() {

// calls child process
var child_process = require("child_process")


//These two lines play intro audio file. 

//  THIS IS THE ACTUAL CALL SIGN 
//path to fm_transmitter and audio file + frequency 
var introTest = ("sudo -E /home/pi/Desktop/russianEmbassy/bin/Release/fm_transmitter callSign.wav 107.30");

//var play2 = child_process.execSync(intro);
var play3 = child_process.execSync(introTest);


var ran1 = ("sudo -E /home/pi/Desktop/russianEmbassy/bin/Release/fm_transmitter abdelNasser.wav 107.30");
var ran2 = ("sudo -E /home/pi/Desktop/russianEmbassy/bin/Release/fm_transmitter afghan_1.wav 107.30");
var ran3 = ("sudo -E /home/pi/Desktop/russianEmbassy/bin/Release/fm_transmitter Brezhnev_1.wav 107.30");
var ran4 = ("sudo -E /home/pi/Desktop/russianEmbassy/bin/Release/fm_transmitter castro.wav 107.30");
var ran5 = ("sudo -E /home/pi/Desktop/russianEmbassy/bin/Release/fm_transmitter castrointerview_2.wav 107.30");
var ran6 = ("sudo -E /home/pi/Desktop/russianEmbassy/bin/Release/fm_transmitter chernobyl_2.wav 107.30");
var ran7 = ("sudo -E /home/pi/Desktop/russianEmbassy/bin/Release/fm_transmitter deanReed.wav 107.30");
var ran8 = ("sudo -E /home/pi/Desktop/russianEmbassy/bin/Release/fm_transmitter economic.wav 107.30");
var ran9 = ("sudo -E /home/pi/Desktop/russianEmbassy/bin/Release/fm_transmitter franceUSA1.wav 107.30");
var ran10 = ("sudo -E /home/pi/Desktop/russianEmbassy/bin/Release/fm_transmitter JeanMonet.wav  107.30");
var ran11 = ("sudo -E /home/pi/Desktop/russianEmbassy/bin/Release/fm_transmitter johnGlenn.wav 107.30");
var ran12 = ("sudo -E /home/pi/Desktop/russianEmbassy/bin/Release/fm_transmitter kino.wav 107.30");
var ran13 = ("sudo -E /home/pi/Desktop/russianEmbassy/bin/Release/fm_transmitter nicaragua.wav 107.30");
var ran14 = ("sudo -E /home/pi/Desktop/russianEmbassy/bin/Release/fm_transmitter order.wav 107.30");
var ran15 = ("sudo -E /home/pi/Desktop/russianEmbassy/bin/Release/fm_transmitter paulRobeson.wav 107.30");
var ran16 = ("sudo -E /home/pi/Desktop/russianEmbassy/bin/Release/fm_transmitter philby.wav 107.30");
var ran17 = ("sudo -E /home/pi/Desktop/russianEmbassy/bin/Release/fm_transmitter reforger.wav 107.30");
var ran18 = ("sudo -E /home/pi/Desktop/russianEmbassy/bin/Release/fm_transmitter reganAirport.wav 107.30");
var ran19 = ("sudo -E /home/pi/Desktop/russianEmbassy/bin/Release/fm_transmitter socialism.wav 107.30");
var ran20 = ("sudo -E /home/pi/Desktop/russianEmbassy/bin/Release/fm_transmitter whatHaveWeDone.wav 107.30");
var ran21 = ("sudo -E /home/pi/Desktop/russianEmbassy/bin/Release/fm_transmitter YasserArafat_2.wav 107.30");



// puts all audio files into an array
var randomAudio  = [ran1, ran2, ran3, ran4, ran5, ran6, ran7, ran8, ran9, ran10, ran11, ran12, ran13, ran14, ran15, ran16, ran17, ran18, ran19, ran20, ran21  ];

//ON RANDOM NUMBERS https://stackoverflow.com/questions/6702146/generating-random-integer-in-range-that-doesnt-start-at-zero

//creates a variable ranNUM  with a random integer
var ranNum  = Math.floor(1 + Math.random() * 3);
console.log(ranNum);//prints that number just so I can test

var x = 1; //for use in loop

while(x <=  ranNum){ //while x is less than the ran number

var audioRan = randomAudio[Math.floor(Math.random() * randomAudio.length)] + 1 ;//select a random audio file the + 1 makes sure its not zero
var play = child_process.execSync(audioRan);//play that random audio file
x++; //incremenet x by 1 each loop
}

}
});


