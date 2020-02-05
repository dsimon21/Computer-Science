$(document).ready(function(){

    $("#sortButton").click(function(){
                    
    });
                
    $("#indexButton").click(function(){
        $('.letter Display').text('');

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

        
        /*[{letter:"a",frequency:0},{letter:"e",frequency:4}]

        words.push({word: wordFound, frequency:1});

        words[wordIndex].frequency++;

        words[1].frequency = 1;
        words[1].letter = "f";
        
        var indexFound = words.findIndex(checkWord)
        words[indexFound].f; tells the frequency of the word found */
                    
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
                console.log(curWord);
                if(words.findIndex(checkWord)<0 && (alphabet.indexOf(curWord.charAt(0)))>=0) {
                   words.push({word: curWord, frequency:1}); 
                }
                else{
                    if(words.findIndex(checkWord)>=0 && (alphabet.indexOf(curWord.charAt(0)))>=0) {
                        wordIndex=words.findIndex(checkWord);
                        words[wordIndex].frequency++;
                    }
                }
                curWord="";

            }
        
        }

        console.log(words);

        var vows = As + Es +Is + Os + Us;
        $('#vowel').text(vows);            
        $('#conso').text(numCons);
        $('#aVowel').text(As);
        $('#eVowel').text(Es);
        $('#iVowel').text(Is);
        $('#oVowel').text(Os);
        $('#uVowel').text(Us);
        $('#word').text(numWords);

    });
                
});