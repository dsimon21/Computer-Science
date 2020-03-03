$(document).ready(function(){
    $("#button").click(function(){
        $('listBox').text('');
        myFunction(); 
    });
    
    function myFunction() {
        var origText = $("#nameBox").val();
        var name = origText.toLowerCase();
        var line = [];
        var coaches = ["coach", "coach1", "coach2", "coach3"];
        
        function rule1(){
            if(line.includes(name)){
                rule3();
            }
            else{
                if(coaches.includes(line[0])){
                    if(coaches.includes(line[1])){
                        if(coaches.includes(line[2])){
                            if(coaches.includes(line[3])){

                            }
                            else{
                                line.splice(3,name);
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
        }

        function rule2(){
            for(var p=0; p<line.length; p++){
                removedName=line[p]
                line.splice(p,1)
                if(line.includes(name)){
                    line.splice(p,name);
                    //need to get out of loop here if this does not happen
                    line.splice(p+1,removedName);
                }
                else line.splice(p,removedName);
            }
        }

        function rule3(){
            line.push(name);
        }
        
        if(coaches.includes(name)){
            rule1();
        }
        else{
            if(line.includes(name)){
                rule3();
            }
            else{
                rule2();
            }
        }

        console.log(line);
        for(var p=0; p<line.length; p++){
            $('#listBox').append("<div class='nameItem'>" + line[p] + "</div>");
        }
        $('nameBox').text(''); 
    }

});
