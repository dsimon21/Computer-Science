// The lines below appends "o" (the 5th character of message) in to the div with id
// firstExample
var message = "Hello how are you?";

$('#firstExample').append(message.charAt(4));

//Write code below to append the 8th character of message to firstActivity
$('#firstActivity').append(message.charAt(7));


//Write code below to append the 4th and 9th character of message to secondActivity
//You should see lw
$('#secondActivity').append(message.charAt(3));
$('#secondActivity').append(message.charAt(8));

//What does charAt do? Use jQuery to display your answer in the div with id charAtAnswer
$('#charAtAnswer').append("charAt tells the computer which charectar to print with the first one being zero.");


//Use the variable alphabet below and the chartAt function to append your name in
//the div with id thirdActivity HINT: You will need to use as many append statements
//as you have letters in your name.

var alphabet = "abcdefghijklmnopqrstuvwxyz";

$('#thirdActivity').append(alphabet.charAt(3));
$('#thirdActivity').append(alphabet.charAt(0));
$('#thirdActivity').append(alphabet.charAt(13));
$('#thirdActivity').append(alphabet.charAt(8));
$('#thirdActivity').append(alphabet.charAt(4));
$('#thirdActivity').append(alphabet.charAt(11));
$('#thirdActivity').append(alphabet.charAt(11));
$('#thirdActivity').append(alphabet.charAt(4));

