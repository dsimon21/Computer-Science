$(document).ready(function(){
    $("#button").click(function(){
        $('#listBox').text('');
        myFunction(); 
    });
    
    function myFunction() {
        var origText = $("#nameBox").val();
        var name = origText.toLowerCase();
        var line = [];
        var coaches = ["coach", "coach1", "coach2", "coach3"];
        found = false;
        
        /*function rule1(){
            if(coaches.includes(line[0])){
                if(coaches.includes(line[1])){
                    if(coaches.includes(line[2])){
                        if(coaches.includes(line[3])){
                            line.splice(3,name);
                        }
                        else{
                            line.splice(4,name);
                        }
                    }
                    else{
                        line.splice(2,name);
                    }
                }
                else{
                    line.splice(1,name);
                }
            }
            else{
                line.unshift(name);
            }
        }

        function rule2(){
            while (!found){
                removedName=line[p]
                line.splice(p,1)
                if(line.includes(removedName)){
                    line.splice(p,name);
                    line.splice(p+1,removedName);
                    found=true;
                }
                else line.splice(p,removedName);
                p++
            }
        }

        function rule3(){
            */line.push(name);/*
        }
        
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
        */
        
        console.log(line);
        for(var p=0; p<line.length; p++){
            $('#listBox').append("<div class='nameItem'>" + line[p] + "</div>");
        }
        //document.getElementById("#nameBox").value=””;
    }

});
