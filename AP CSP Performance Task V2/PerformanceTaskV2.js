$(document).ready(function(){
    $("#button").click(function(){
        $('#listBox').text('');
        myFunction(); 
    });

    var line = [];

    function checkSkater(skater) {
        return line.s == skater;
    }

    function checkTurn(p) {
        console.log(p, line);
        return line[p-1].s == removedName;
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
        var p=line.length-1;
        var firstTurn=false;
        while (!firstTurn && p>=0){
            removedName=line[p].s;
            fullRemovedName=line[p];
            line.splice(p,1);
            if(line.findIndex(checkTurn)<p && line.findIndex(checkTurn)>=0){
                //need to send variables to checkTurn
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
    
    function myFunction() {
        var skater = ($("#nameBox").val()).toLowerCase();
        var coaches = ["coach", "coach1", "coach2", "coach3"]

        if((line.findIndex(checkSkater))>=0 || line.length==0){
            //need to send variables to checkSkater
            console.log(skater);
            rule3(skater);
        }
        else{
            if(coaches.includes(skater)){
                rule1(coaches);
            }
            else{
                rule2(skater);
            }
        } 
        console.log(line);   
    }

    /*for(var p=0; p<line.length; p++){
        $('#listBox').append("<div class='nameItem'>" + line.w[p] + "</div>");
    } */

    $(".nameItem").click(function(){
        confirm("Are you sure you would like to be taken out of line?");
    });

});
