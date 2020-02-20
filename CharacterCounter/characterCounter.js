$(document).ready(function(){

    $("#sortButton").click(function(){
        $('.letter Display').text('');
        $('#box2').text('');
        order=true;
        myFunction();           
    });
                
    $("#indexButton").click(function(){
        $('.letter Display').text('');
        $('#box2').text('');
        order=false;
        myFunction();
    });

    function myFunction() {

        var origText = $("#text").val();
        var text = origText.toLowerCase();

        var As = 0;
        var Es = 0;
        var Is = 0;
        var Os = 0;
        var Us = 0;
        var numCons = 0;
        var cons = "bcdfghjklmkpqrstvwxyz";
        var alphabet= "abcdefghijklmnopqrstuvwxyz";
        var numWords = 0;
        var curWord = ""
        var wordIndex = 0
        var words = [];
                    
        if(alphabet.indexOf(text.charAt(0))>=0){
            numWords++;
        }

        $('#char').text(text.length);

        for(var pointer=0; pointer<text.length; pointer++){   

            var letter = text.charAt(pointer);
            var nextLetter = text.charAt(pointer+1);

            switch (letter) {
                case "a":
                    As++;
                    break;
                case "e":
                    Es++;
                    break;
                case "i":
                    Is++;
                    break;
                case "o":
                    Os++;
                    break;
                case "u":
                    Us++;
                    break;
                case " ":
                    if(alphabet.indexOf(nextLetter)>=0 && pointer<text.length-1){
                        numWords++;
                    }
                    break;
                } 
                
            if(cons.indexOf(letter)>=0){
                numCons++;
            }
            
            function checkWord(words) {
                return words.w == curWord;
            }
            if(alphabet.indexOf(text.charAt(pointer))>=0){
                curWord += text.charAt(pointer);
            }
            else{
                if(words.findIndex(checkWord)<0 && (alphabet.indexOf(curWord.charAt(0)))>=0 && curWord.length>0) {
                   words.push({w: curWord, f:1});
                }
                else{
                    if(words.findIndex(checkWord)>=0 && (alphabet.indexOf(curWord.charAt(0)))>=0 && curWord.length>0) {
                        wordIndex=words.findIndex(checkWord);
                        words[wordIndex].f++;
                    }
                }
                curWord="";

            }
            
        }

        var end= (text.length-1);

        if(alphabet.indexOf(text.charAt(end))>=0 && curWord.length>0){
            if(words.findIndex(checkWord)<0 && (alphabet.indexOf(curWord.charAt(0)))>=0) {
                words.push({w: curWord, f:1}); 
            }
                else{
                    if(words.findIndex(checkWord)>=0 && (alphabet.indexOf(curWord.charAt(0)))>=0) {
                        wordIndex=words.findIndex(checkWord);
                        words[wordIndex].f++;
                    }
                }
        }

        if(!order){
            for(var p=0; p<words.length; p++){
                $('#box2').append("<div class='wordItem'><div class='wordz'>" + words[p].w + "</div><div class='freq'>" + words[p].f + "</div></div>");
            }
        }
        else{
            function reorder() {
                words.sort(function(w1, w2){return w2.f-w1.f});
            }
            reorder();
            for(var p=0; p<words.length; p++){    
                $('#box2').append("<div class='wordItem'><div class='wordz'>" + words[p].w + "</div><div class='freq'>" + words[p].f + "</div></div>");
            }
        }

        var vows = As + Es +Is + Os + Us;
        $('#vowel').text(vows);            
        $('#conso').text(numCons);
        $('#aVowel').text(As);
        $('#eVowel').text(Es);
        $('#iVowel').text(Is);
        $('#oVowel').text(Os);
        $('#uVowel').text(Us);
        $('#word').text(numWords);
    
    }   
                
});