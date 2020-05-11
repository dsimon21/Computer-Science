$(document).ready(function(){
    $("#button").click(function(){
        $('#listBox').text('');
        myFunction(); 
    });
});

var unordered = [];
var line = [];

function myFunction() {
    var origText = $("#nameBox").val();
    var text = origText.toLowerCase();
    var name = "";
    var skater = "";
    var alphabet = "abcdefghijklmnopqrstuvwxyz123456789,/!?:<>-_+=*&#'";
    var coaches = ["coach", "coach1", "coach2", "coach3"];
    var ending = ";"

    for(var pointer=0; pointer<text.length; pointer++){
        if(alphabet.indexOf(text.charAt(pointer))>=0){
            skater += text.charAt(pointer);
        }
        else{
            if(ending.indexOf(text.charAt(pointer))>=0) unordered.push(skater);
            skater = "";
        }
    }

    for(var p=0; p<unordered.length; p++){
        name=unordered[p];
        if(line.includes(name) || line.length==0){
            rule3(name);
        }
        else{
            if(coaches.includes(name)){
                rule1(coaches, name);
            }
            else{
                rule2(name);
            }
        }    
    }

    for(var p=0; p<line.length; p++){
        $('#listBox').append("<div class='nameItem'>" + line[p] + "</div>");
    }

}
        
function rule1(coaches, name){
    var x=0;
    noCoach = false;
    var curName = ""
    while (!noCoach && x<=coaches.length-1 && x<=line.length-1){
        curName=line[x];
        if(coaches.includes(curName)){
            x++;
        }
        else{
            line.splice(x,0,name);
            noCoach=true;
        }
    }
    if(!noCoach && x==line.length-1){
        line.push(name);
    }
    noCoach=false;
} 

function rule2(name){
    firstTurn = false;
    var p=line.length-1;
    while (!firstTurn && p>=0){
        removedName=line[p];
        line.splice(p,1);
        if(line.indexOf(removedName)<p && line.indexOf(removedName)>=0){
            line.splice(p,0,removedName);
            p--;
        }
        else{
            line.splice(p,0,removedName);
            line.splice(p+1,0,name);
            firstTurn=true;
        }       
    }
}
         
function rule3(name){
    line.push(name);
}