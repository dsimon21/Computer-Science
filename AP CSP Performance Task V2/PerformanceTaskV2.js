$(document).ready(function(){
    $("#button").click(function(){
        $('#listBox').text('');
        myFunction(); 
    });

    var line = [];
    
    function myFunction() {
        var skater = ($("#nameBox").val()).toLowerCase();
        var coaches = ["coach", "coach1", "coach2", "coach3"]
        
        function checkSkater(line) {
            return line.s == skater;
        }
        
        function rule1(){
            console.log("rule1");
            var x = 0;
            var noCoach = false;
            var curName = "";
            while (!noCoach && x<=coaches.length-1 && x<=line.length-1){
                curName = line[x].s;
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


        function rule2(){
            console.log("rule2");
            for(var i=0; i<line.length; i++)
                console.log(line[i].s);
            var p=line.length-1;
            var firstTurn=false;

            function checkTurn(line) {
                console.log(line);
                console.log(line.length);
                console.log(p);
                return line[0].s == removedName;
            }

            while (!firstTurn && p>=0){
                removedName=line[p].s;
                fullRemovedName=line[p];
                line.splice(p,1);
                if(line.findIndex(checkTurn)<p && line.findIndex(checkTurn)>=0){
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
         
        function rule3(){
            console.log("rule3")
            line.push({s: skater, a: true});
        }
        
        if((line.findIndex(checkSkater))>=0 || line.length==0){
            rule3();
        }
        else{
            if(coaches.includes(skater)){
                rule1();
            }
            else{
                rule2();
            }
        }    
    }

    console.log(line);

        /*for(var p=0; p<line.length; p++){
            $('#listBox').append("<div class='nameItem'>" + line[p] + "</div>");
        } */

    $(".nameItem").click(function(){
        confirm("Are you sure you would like to be taken out of line?");
    });

});