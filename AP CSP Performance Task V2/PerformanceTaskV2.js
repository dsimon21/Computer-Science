$(document).ready(function(){
    $("#button").click(function(){
        $('#listBox').text('');
        myFunction(); 
    });

});

var line = [];

function myFunction() {
    var skaterName = ($("#nameBox").val()).toLowerCase();
    ($("#nameBox")).value = "";
    var coaches = ["coach", "coach1", "coach2", "coach3"]

    if((line.findIndex(checkSkater, skaterName))>=0 || line.length==0){
        rule3(skaterName);
    }
    else{
        console.log(line.findIndex(checkSkater, skaterName));
        if(coaches.includes(skaterName)){
            rule1(coaches, skaterName);
        }
        else{
            rule2(skaterName);
        }
    } 
    
    for(var y=0; y<line.length; y++){
        if(line[y].a==true){
            $('#listBox').append("<div class='nameItem' index'" + y + "'>" + line[y].s + "</div>");
        }
    }

    $(".nameItem").click(function(){
        confirm("Are you sure you would like to be taken out of line?");
        $(this).remove();
        var index = parseInt($(this).attr("index"));
        console.log(index);
        //line[index].a = false;
        //error here computer says index = NaN
    });
        
}

function checkSkater(skater) {
    return skater.s == this;
}


function rule1(coaches, skaterName){
    console.log("rule1");
    var x = 0;
    var noCoach = false;x
    var curName = "";
    while (!noCoach && x<=coaches.length-1 && x<=line.length-1){
        curName = line[x].s
        if(coaches.includes(curName)){
            x++;
        }
        else{
            line.splice(x,0,{s: skaterName, a: true});
            noCoach=true;
        }
    }
    if(!noCoach && x==line.length-1){
        line.push({s: skaterName, a: true});
    }
} 

function rule2(skaterName){
    console.log("rule2");
    var firstTurn=false;
    var p=line.length-1;

    while (!firstTurn && p>=0){
        removedName=line[p].s;
        fullRemovedName=line[p];
        line.splice(p,1);
        if(line.findIndex(checkSkater, removedName)<p && line.findIndex(checkSkater, removedName)>=0){
            console.log(line.findIndex(checkSkater, removedName));
            line.splice(p,0,fullRemovedName);
            p--;
        }
        else{
            console.log(line.findIndex(checkSkater, removedName));
            line.splice(p,0,fullRemovedName);
            line.splice(p+1,0,{s: skaterName, a: true});
            firstTurn=true;
        }       
    }
    console.log(line);
}

function rule3(skaterName){
    console.log("rule3");
    console.log(skaterName);
    line.push({s: skaterName, a: true});
}