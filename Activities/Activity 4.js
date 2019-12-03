$('#sequence').keyup(
    function(){
        var userInput = $(this).val();
        var message;
        if(isZigzag(userInput))
            message = "Sequence is a zigzag."
        else
            message = "Sequence is not a zigzag."
            
        $('#result').text(message);
    }
);

/*
 
 */
function isZigzag(sequence){
    
}
