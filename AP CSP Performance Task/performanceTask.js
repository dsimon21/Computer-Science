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
                position=0
                pointer=line.length
                //check if first in line is coach if not, name becomes first otherwise whck next.
            }
        }

        function rule2(){

        }

        function rule3(){
            line.push(name);
        }
        
        if(coaches.includes(name)){
            rule1();
        }
        else{
            if(line.includes(name)){
                rule2();
            }
            else{
                rule3();
            }
        }

        console.log(line);
        for(var p=0; p<line.length; p++){
            $('#listBox').append("<div class='nameItem'>" + line[p] + "</div>");
        }
        $('nameBox').text(''); 
    }

});
