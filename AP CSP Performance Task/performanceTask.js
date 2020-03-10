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
        
        function rule1(){
            /*if(coaches.includes(line[0])){
                if(coaches.includes(line[1])){
                    if(coaches.includes(line[2])){
                        if(coaches.includes(line[3])){
                            line.splice(3,0,name);
                        }
                        else{
                            line.splice(4,0,name);
                        }
                    }
                    else{
                        line.splice(2,0,name);
                    }
                }
                else{
                    line.splice(1,0,name);
                }
            }
            else{
                line.unshift(name);
            }*/
            console.log("rule1");
        }

        function rule2(){
            console.log("rule2");
            var p=0
            if(line.length==0){
                rule3();
            }
            else{
                console.log(line);
                while (!found && p<=line.length-1){
                    removedName=line[p];
                    console.log(removedName);
                    line.splice(p,1)
                    console.log(line);
                    if(line.includes(removedName)){
                        console.log("in");
                        var newP= line.indexOf(removedName);
                        console.log(newP);
                        line.splice(newP,0,removedName);
                        line.splice(newP+1,0,name);
                        found=true;
                    }
                    else{
                        console.log("in here");
                        line.splice(p,0,removedName);
                        console.log(line);
                        p++
                    }
                if(line.indexOf(name)<0){
                    line.push(name);
                }
                }
            }
        }
        
        function rule3(){
            console.log("rule3");
            console.log(name);
            line.push(name);
            console.log(line);
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
            if(line.includes(name)){
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
