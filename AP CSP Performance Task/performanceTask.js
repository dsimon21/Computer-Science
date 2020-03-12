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
        var alphabet = "abcdefghijklmnopqrstuvwxyz123456789'";
        var unordered = [];
        var line = [];
        var coaches = ["coach", "coach1", "coach2", "coach3"];
        found = false;
        noCoach = false;
        done = false;
        var curName = "";
        
        function rule1(){
            console.log("rule1");
            /*var x=0;
            while (!noCoach && x<=coaches.length-1){
                console.log("in");
                curName=line.indexOf(x);
                if(coaches.includes(curName)){
                    x++;
                }
                else{
                    line.splice(x,0,name);
                    coachFound=true;
                }
            }
            if(!noCoach && x==line.length-1){
                line.push(name);
            }
            coachFound=false; */
        }

        function rule2(){
            console.log("rule2");
            var p=0
            
            if(line.length==0){
                rule3();
            }
            else{
                while (!found && p<=line.length-1){
                    removedName=line[p];
                    line.splice(p,1);
                    if(line.includes(removedName)){
                        var newP= line.indexOf(removedName);
                        line.splice(p,0,removedName);
                        line.splice(newP+1,0,name);
                        found=true;
                        done=true;
                    }
                    else{
                        line.splice(p,0,removedName);
                        p++
                    }
                } 
                if(line.indexOf(name)<0 && !done){
                    line.push(name);
                }
                else{
                    done=false;
                }
                found=false
            }
        }
        
        function rule3(){
            console.log("rule3");
            line.push(name);
        }
        
        for(var pointer=0; pointer<text.length; pointer++){
            if(alphabet.indexOf(text.charAt(pointer))>=0){
                skater += text.charAt(pointer);
            }
            else{
                if(skater.length>0) unordered.push(skater);
                skater = ""
            }
        }

        console.log(unordered);

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
        
        console.log(line);

        for(var p=0; p<line.length; p++){
            $('#listBox').append("<div class='nameItem'>" + line[p] + "</div>");
        }

    }

});
