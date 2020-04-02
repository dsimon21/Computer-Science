$(document).ready(function(){
    $("#button").click(function(){
        $('#listBox').text('');
        myFunction(); 
    });
    
    function myFunction() {
        var origText = $("#nameBox").val();
        var text = origText.toLowerCase();
        var name = "";
        var skater = "";
        var alphabet = "abcdefghijklmnopqrstuvwxyz123456789,/!?:<>-_+=*&#'";
        var unordered = [];
        var line = [];
        var coaches = ["coach", "coach1", "coach2", "coach3"];
        firstTurn = false;
        noCoach = false;
        done = false;
        var curName = "";
        var ending = ";"
        
        function rule1(){
            var x=0;
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

        function rule2(){
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
            firstTurn=false;
        }
         
        function rule3(){
            line.push(name);
        }
        
        for(var pointer=0; pointer<text.length; pointer++){
            if(alphabet.indexOf(text.charAt(pointer))>=0){
                skater += text.charAt(pointer);
            }
            else{
                if(ending.indexOf(text.charAt(pointer))>=0) unordered.push(skater);
                skater = ""
            }
        }

        for(var p=0; p<unordered.length; p++){
            name=unordered[p];
            if(line.includes(name) || line.length==0){
                rule3();
            }
            else{
                if(coaches.includes(name)){
                    rule1();
                }
                else{
                    rule2();
                }
            }    
        }

        for(var p=0; p<line.length; p++){
            $('#listBox').append("<div class='nameItem'>" + line[p] + "</div>");
        }

    }

});
