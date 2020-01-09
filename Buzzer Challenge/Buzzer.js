var shiftPressed = false;
var elsePressed = false;


$(document).keydown(function(e) {
    switch(e.which) {
        case 65: // a
            if(!shiftPressed && !elsePressed){
                elsePressed=true;

            }
        break;

        case 83: // up
        break;

        case 68: // right
        break;

        case 70: // down
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
