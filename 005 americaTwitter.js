
/*
One of two main.js files for Embassy project
This one monitors US Embassies on raspberry pi
When any of them tweet an a series of audio files stored on PI are 
played over fm radio  

Code snippets from Daniel SHiffman https://shiffman.net/a2z/twitter-bots/ 

The audio will play over fm radio using https://github.com/markondej/fm_transmitter  

There are more elegant/efficient ways of doing it with less repition - but this worked for me. 
*/


//SetUp info
var startTime = new Date().toLocaleString();
console. log('Embassy has been activated'); 
var Twit = require('twit'); //twit package
var config = require('./config'); // the config file allowing access Twitter API Data
var T = new Twit(config);//run config file
 
 //end of setup


/*
list of embassies goes here.
Available from https://github.com/ArtOfTheWeak/Embassy/blob/main/003%20americaEmbassylist.js 
*/



//Set's up listening stream for all twitter accounts 
var stream = T.stream('statuses/filter', { follow: [ algeria, benin, botswana, burkinaFaso, burundi, cameroon, cae, repCongo, demrepCongo, djibouti, egypt, equitorialGuinea, swatini, ethiopia, gabon, gambia, ghana, guinea, ivoryCoast, kenya, lesotho, liberia, madagascar, malawi, mali, mauritania, mauritius, morocco, mozambique, namibia, niger, rwanda, senegal, sierraLeone, somalia, sa, sudan, tanzania, togo, tunisia, uganda, zambia, zimbabwe, antiguaBarbadosGrenada, argentina, bahamas, belize, bolivia, brazil, canada, chile, colombia, costaRica, cuba, dominicanRepublic, ecuador, salvador, guatemala, guyana, haiti, honduras, jamaica, mexico, nicaragua, panama, paraguay, peru, suriname, trinidadTobago, uruguay, venezuela, afghanistan, armenia, azerbijan, bahrain, bangladesh, brunei, cambodia, eastTimor, georgia, india, indonesia, iraq, israel, japan, jordan, kazakhstan, kuwait, kyrgyzstan, laos, lebanon, malaysia, mongolia, myanmar, nepal, oman, pakistan, phillipines, qatar, saudiArabia, sriLanka, syria, singapore, southKorea, tajikstan, thailand, turkey, turkmenistan, uae, uzbekistan, albania, austria, belarus, belgium, bosniaHerz, bulgaria, croatia, cyprus, czech, denmark, estonia, finland, france, germany, greece, vatican, hungary, iceland, ireland, italy, kosovo, latvia, lithuania, luxembourg, malta, moldova, montenegro, netherlands, northMacedonia, norway, poland, portugal, romania, russia, serbia, slovakia, slovenia, spain, sweden, switzerland, ukraine, uk, australia, fiji, micronesia, nz, papuaNG, samoa   ].join(',') });
stream.on('tweet', function (tweet) {

// two variables to store tweet time  and actual tweet
var tweetTime = new Date().toLocaleString();
var printTweet = tweet.text;


/////////////EMBASSIES\\\\\\\\\\\\\\\\\\\\\\\\

/*
I have left in first and last countries  as an example,
it's the same process for countries 
*/


if (tweet.user.id == algeria ) {
 
    printTweet.toString()//converts printTweet to String
    console.log(printTweet) //prints tweet as variable
  
    console.log("Algeria is Tweeting " + tweetTime);
  
    audio1(); 

  }

//Last country on the list 

if (tweet.user.id == papuaNG ) {
 
    printTweet.toString()
    console.log(printTweet) 
    console.log("Papua New Guinea is Tweeting " + tweetTime);
  
    audio1(); 
  
}

});



/* All audio in audio1 fucntion
When its called 1- 4 clips are randomly selected and played
*/
function audio1(){

// calls child process
var child_process = require("child_process")


//These two lines play intro audio file. 

//  THIS IS THE ACTUAL CALL SIGN 
//path to fm_transmitter and audio file + frequency 
var intro = ("sudo -E /home/pi/Desktop/USEmbassy/bin/Release/fm_transmitter USCallSign.wav 87.65");
var play2 = child_process.execSync(intro);

var ran1 = ("sudo -E /home/pi/Desktop/USEmbassy/bin/Release/fm_transmitter afghan_2.wav 87.65");
var ran2 = ("sudo -E /home/pi/Desktop/USEmbassy/bin/Release/fm_transmitter berlin_1.wav 87.65");
var ran3 = ("sudo -E /home/pi/Desktop/USEmbassy/bin/Release/fm_transmitter berlin_3.wav 87.65");
var ran4 = ("sudo -E /home/pi/Desktop/USEmbassy/bin/Release/fm_transmitter bikiniSun.wav 87.65");
var ran5 = ("sudo -E /home/pi/Desktop/USEmbassy/bin/Release/fm_transmitter Brezhnev_2.wav 87.65");
var ran6 = ("sudo -E /home/pi/Desktop/USEmbassy/bin/Release/fm_transmitter castroInterview_1.wav 87.65");
var ran7 = ("sudo -E /home/pi/Desktop/USEmbassy/bin/Release/fm_transmitter chernobyl_1.wav 87.65");
var ran8 = ("sudo -E /home/pi/Desktop/USEmbassy/bin/Release/fm_transmitter cover.wav 87.65");
var ran9 = ("sudo -E /home/pi/Desktop/USEmbassy/bin/Release/fm_transmitter disturbance.wav 87.65");
var ran10 = ("sudo -E /home/pi/Desktop/USEmbassy/bin/Release/fm_transmitter enola.wav 87.65");
var ran11 = ("sudo -E /home/pi/Desktop/USEmbassy/bin/Release/fm_transmitter escalation.wav 87.65");
var ran12 = ("sudo -E /home/pi/Desktop/USEmbassy/bin/Release/fm_transmitter FallOfBerlinWall.wav 87.65");
var ran13 = ("sudo -E /home/pi/Desktop/USEmbassy/bin/Release/fm_transmitter franceUSA2.wav 87.65");
var ran14 = ("sudo -E /home/pi/Desktop/USEmbassy/bin/Release/fm_transmitter kasinkina.wav 87.65");
var ran15 = ("sudo -E /home/pi/Desktop/USEmbassy/bin/Release/fm_transmitter kissinger.wav 87.65");
var ran16 = ("sudo -E /home/pi/Desktop/USEmbassy/bin/Release/fm_transmitter nicaragua.wav 87.65");
var ran17 = ("sudo -E /home/pi/Desktop/USEmbassy/bin/Release/fm_transmitter numbers_1.wav 87.65");
var ran18 = ("sudo -E /home/pi/Desktop/USEmbassy/bin/Release/fm_transmitter outro.wav  87.65");
var ran19 = ("sudo -E /home/pi/Desktop/USEmbassy/bin/Release/fm_transmitter pragueSpring.wav 87.65");
var ran20 = ("sudo -E /home/pi/Desktop/USEmbassy/bin/Release/fm_transmitter SwedishRhapsody.wav 87.65");
var ran21 = ("sudo -E /home/pi/Desktop/USEmbassy/bin/Release/fm_transmitter theRuler.wav 87.65");
var ran22 = ("sudo -E /home/pi/Desktop/USEmbassy/bin/Release/fm_transmitter womenHappy.wav 87.65");
var ran23 = ("sudo -E /home/pi/Desktop/USEmbassy/bin/Release/fm_transmitter YasserArafat_1.wav 87.65");
var ran24 = ("sudo -E /home/pi/Desktop/USEmbassy/bin/Release/fm_transmitter angola.wav 87.65");


// puts all audio files into an array
var randomAudio  = [ran1, ran2, ran3, ran4, ran5, ran6, ran7, ran8, ran9, ran10, ran11, ran12, ran13, ran14, ran15, ran16, ran17, ran18, ran19, ran20, ran21, ran22, ran23 ];

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





