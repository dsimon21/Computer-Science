


function toBinary(decimal){
    var binary="";
    var x=0;

    while (decimal>=Math.pow(2,x)) {
        //decimal = decimal - Math.pow(2,x);    
        x++;
    }

    x--;
    //console.log(x);


    while (x>=0){
        var currentVal=Math.pow(2,x);
       if(currentVal<=decimal){
            binary+= "1";
            decimal-=currentVal;
        }
        else binary+= "0";
        x--;
    }
    console.log(binary)
}



toBinary(43);
toBinary(32);