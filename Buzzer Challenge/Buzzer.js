var shiftPressed = false;
var elsePressed = false;


$(document).keydown(function(e) {
    switch(e.which) {
        case 65: // a
            if(!shiftPressed && !elsePressed){
                elsePressed=true;
                $('#bulb1 .bulb').attr("src","images/bulbOn.png");
            }
        break;

        case 83: // s
            if(!shiftPressed && !elsePressed){
                elsePressed=true;
                $('#bulb2 .bulb').attr("src","images/bulbOn.png");
            }
        break;

        case 68: // d
            if(!shiftPressed && !elsePressed){
                elsePressed=true;
                $('#bulb3 .bulb').attr("src","images/bulbOn.png");
            }
        break;

        case 70: // f
            if(!shiftPressed && !elsePressed){
                elsePressed=true;
                $('#bulb4 .bulb').attr("src","images/bulbOn.png");
            }
        break;

        case 16: // shift
            shiftPressed=true;
        break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});

$(document).keyup(function(e) {
    if(e.which==16){
        shiftPressed=false;
    }
})
