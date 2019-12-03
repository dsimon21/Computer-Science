// The line below appends "Hello world!" in to the div with id firstExample"
$('#firstExample').append("Hello world!");

//Write code below to append the message "How are you? to the box with id firstActivity"
$('#firstActivity').append("How are you?");


//The code below displays the message "I love loops!" 10 times in div with id secondExample
for(var i=0; i<10 ; i++)
    $('#secondExample').append("I love loops!");
    
//Write code below that displays "I am looping!" 15 times in the div with id secondActivity;
for(var i=0; i<15 ; i++)
    $('#secondActivity').append("I am looping!");


//The code below displays the message "Great times" 10 times and numbers them.
for(var i=0; i<10 ; i++)
    $('#thirdExample').append(i + " Great times!");
    
//Write code below that appends "I love snow" in thirdActivity 8 times and numbers them;
for(var i=0; i<8 ; i++)
    $('#thirdActivity').append(i + "I love snow");


//The code below displays the message "Great times" 10 times, numbers them and adds a break .
for(var i=0; i<10 ; i++)
    $('#fourthExample').append(i + " Great times!<br>");
    
//Write code below that displays "I love snow" 8 times in fourthActivity, 
//numbers them, and adds a break
for(var i=0; i<8 ; i++)
    $('#fourthActivity').append(i + " I love snow<br>");


//Write code below that displays "Snow is cold" 8 times in fifthActivity, 
//numbers them starting at 10, and adds a break
for(var i=10; i<18 ; i++)
    $('#fifthActivity').append(i + " Snow is cold<br>");


//Write code below that displays "Summer is awesome!" 12 times in sixthActivity, 
//numbers them starting at 10, and adds a break
for(var i=10; i<22 ; i++)
    $('#sixthActivity').append(i + " Summer is awesome!<br>");


//What does append do? Use jQuery to display your answer in the div with id appendAnswer
$('#appendAnswer').append("append tells the computer to display the message");

// The line below appends a div with classes small and color1 in to the div with id seventhExample"
$('#seventhExample').append("<div class='small color1'></div>");

//Write code below to append a div with classes small and color2 to the box with id seventhActivity
$('#seventhActivity').append("<div class='small color2'></div>");

//Write code below to append 5 boxes with classes big and color2 to the box with id eighthActivity
//Use a loop
for(var i=0; i<5 ; i++)
    $('#eighthActivity').append("<div class='big color2'></div>");

//write code below to append 10 alternating boxes (small color0, big color1) to the box with
//id ninthActivity. Since there isn't a ninthActiviy box, you will have to add one to your HMTL. //HINT: Alternating means doing a different action for when i is odd and for when i is even.
for(var i=0; i<10 ; i++){
    var num = i%2 +1;
    console.log(num);
    var size;
    if(num == 1)
        size= 'small';
    else
        size= 'big' ;
   $('#ninthActivity').append("<div class='" + size + " color" + num + "'></div>");
 }
   
