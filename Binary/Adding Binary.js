/*var numOne="110";
var numTwo="111";

var pointer1=numOne.length-1;
var carry = false;
var numSum="";
for(var pointer1=numOne.length-1; pointer1>=0; pointer1--){

    var char1=numOne.charAt(pointer1);
    var char2=numTwo.charAt(pointer1);


    if(char1=="0" && char2=="0"){
        if(carry==true){
            numSum+="1";
            carry=false;
        }
        else 
            numSum+="0";
    }

    if(char1=="0" && char2=="1" ||  char1=="1" && char2=="0"){
        if(carry==true){
            numSum+="0";
        }
        else 
            numSum+="1";
        //console.log(numSum)
    }


    if(char1=="1" && char2=="1"){
        if(carry==true){
            numSum+="1"
        }
        else
            numSum+="0";
            carry= true;
    }
}

if (carry=true){
    numSum+= "1"
}

console.log(numSum)*/


function binaryAdd(numOne, numTwo){
    var pointer1=numOne.length-1;
    var carry = false;
    var numSum="";
    for(var pointer1=numOne.length-1; pointer1>=0; pointer1--){

        var char1=numOne.charAt(pointer1);
        var char2=numTwo.charAt(pointer1);


        if(char1=="0" && char2=="0"){
            if(carry==true){
                numSum+="1";
                carry=false;
            }
            else 
                numSum+="0";
        }

        if(char1=="0" && char2=="1" ||  char1=="1" && char2=="0"){
            if(carry==true){
                numSum+="0";
            }
            else 
                numSum+="1";
        }


        if(char1=="1" && char2=="1"){
            if(carry==true){
                numSum+="1"
            }
            else
                numSum+="0";
                carry= true;
        }
    }

    if (carry=true){
        numSum+= "1"
    }

    return numSum
}

console.log(binaryAdd("110","111"));

