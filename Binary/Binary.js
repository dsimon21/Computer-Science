/*var binary="110110";

var base10=0;
var power=0;

var digit=binary.charAt(2);
console.log(digit);
var pointer=binary.length-1;
console.log(pointer);

for(pointer;pointer>=0;pointer--){
    digit = binary.charAt(pointer);
    if(digit=="1"){
        base10=base10+Math.pow(2,power);
    }
    power++;
}

console.log(base10)*/


function toDecimal(binary){
    var numNumber=0;
    var pointer=binary.length-1;
    var power=0;
    //var digit = binary.charAt(pointer);
    
    //console.log(pointer);

    for(pointer;pointer>=0;pointer--){
        var digit = binary.charAt(pointer);
        if(digit=="1"){
            numNumber += Math.pow(2,power)
        }
        power++
    }
    return numNumber
}

console.log(toDecimal("100"));
console.log(toDecimal("111"));




