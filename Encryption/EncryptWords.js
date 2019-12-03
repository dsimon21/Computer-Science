/*function encryptWord(message, word){
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var encoded = ""

    for(var pointer=0; pointer<=message.length-1; pointer++){
        var letter = message.charAt(pointer)
        var index = alphabet.indexOf(letter)
        var y = word.charAt(pointer%(word.length))
        var x = alphabet.indexOf(y)
        encoded += alphabet.charAt((index + x)%alphabet.length);
    }   
    
    return encoded
}

console.log(encryptWord("zebra", "fish")); */


function enc(message,key,needDecrypt){
      
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var encoded = ""

    for(var pointer=0; pointer<=message.length-1; pointer++){
        
        var letter = message.charAt(pointer);
        var index = alphabet.indexOf(letter);  
        var y = key.charAt(pointer%(key.length));
        var x = alphabet.indexOf(y);
        
        var num;
        if(needDecrypt){
            //console.log("hello");
            num = alphabet.length-x
        }
        else{
            //console.log("bye");
            num = x;
        }

        console.log(num);
        encoded += alphabet.charAt((index + num)%alphabet.length);
    }   
     
    return encoded
}

console.log(enc("zebra", "fish", false));
console.log(enc("emtyf","fish",true))

console.log(enc(enc("zebra","fish",false),"fish",true));