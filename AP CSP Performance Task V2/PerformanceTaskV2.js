$(document).ready(function(){
    $("#button").click(function(){
        $('#listBox').text('');
        myFunction(); 
    });

    $(".nameItem").click(function(){
        confirm("Are you sure you would like to be taken out of line?");
    });
    //this will need to be moved because .nameItem hasn't been created yet

});

var line = [];
var p=line.length-1;

function myFunction() {
    var skater = ($("#nameBox").val()).toLowerCase();
    //set value of box to empty
    var coaches = ["coach", "coach1", "coach2", "coach3"]

    if((line.findIndex(checkSkater, skater))>=0 || line.length==0){
        rule3(skater);
    }
    else{
        console.log(line.findIndex(checkSkater, skater));
        if(coaches.includes(skater)){
            rule1(coaches);
        }
        else{
            rule2(skater);
        }
    } 
    console.log(line); 
        
    /*for(var y=0; y<line.length; y++){
        //issue in here
        if(line.a[y]){
            $('#listBox').append("<div class='nameItem'>" + line.s[y] + "</div>");
        }
    }*/
        
}

function checkSkater(array) {
    return array.s == name;
    console.log("in");
}

function checkTurn(array1) {
    return array1.s[p-1] == nameSent;
    //fix checkTurn to be like checkSkater
}

function rule1(coaches){
    console.log("rule1");
    var x = 0;
    var noCoach = false;
    var curName = "";
    while (!noCoach && x<=coaches.length-1 && x<=line.length-1){
        curName = line[x].s
        if(coaches.includes(curName)){
            x++;
        }
        else{
            line.splice(x,0,{s: skater, a: true});
            noCoach=true;
        }
    }
    if(!noCoach && x==line.length-1){
        line.push({s: skater, a: true});
    }
} 

function rule2(skater){
    console.log("rule2");
    var firstTurn=false;
    while (!firstTurn && p>=0){
        removedName=line[p].s;
        fullRemovedName=line[p];
        line.splice(p,1);
        if(line.findIndex(checkTurn, removedName)<p && line.findIndex(checkTurn, removedName)>=0){
            line.splice(p,0,fullRemovedName);
            p--;
        }
        else{
            line.splice(p,0,fullRemovedName);
            line.splice(p+1,0,{s: skater, a: true});
            firstTurn=true;
        }       
    }
    console.log(line);
}

function rule3(skater){
    console.log("rule3");
    console.log(skater);
    line.push({s: skater, a: true});
}