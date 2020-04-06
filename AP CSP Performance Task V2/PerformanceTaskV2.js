$(document).ready(function(){
    $("#button").click(function(){
        $('#listBox').text('');
        myFunction(); 
    });

    var line = [];
    
    function checkLine() {
         return line.s;
    }
    
    function myFunction() {
        var skater = ($("#nameBox").val()).toLowerCase();
        var coaches = ["coach", "coach1", "coach2", "coach3"]
        
        function rule1(){
            console.log("rule1");
        } 

        function rule2(){
            console.log("rule2");
        }
         
        function rule3(){
            console.log("rule3")
            line.push({s: skater, a: true});
        }
        
        if((line.findIndex(checkLine))>=0 || line.length==0){
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

        /*for(var p=0; p<line.length; p++){
            $('#listBox').append("<div class='nameItem'>" + line[p] + "</div>");
        } */

    $(".nameItem").click(function(){
        confirm("Are you sure you would like to be taken out of line?");
    });

});