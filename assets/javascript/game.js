Game = {};
Game.WordArray = [];
Game.UserWordArray = [];
Game.Tries = 5;
Game.WordBank = 20;
Game.Word = "placeholder";
Game.UWord = "";

Game.PullWord = function(){
    Game.Word = Words.List[(Math.floor(Math.random() * Game.WordBank))];
}
Game.SetUnderline = function(){
    Game.PullWord();
    for(i=0; i < Game.Word.length; i++){
        Game.WordArray[i] = Game.Word.charAt(i);
        Game.UserWordArray[i] = "_";
    }
    Game.UWord = Game.UserWordArray.join("");
    document.getElementById("BANK").innerHTML = Game.UWord;
    document.getElementById("numLetters").innerHTML = Game.Word.length;
}
Game.UpdateLetter = function(letter){
    Game.Changes = 0;
    for(i=0; i < Game.Word.length; i++){
        Game.WordArray[i] = Game.Word.charAt(i);
        if(Game.Word.charAt(i) == letter){
            Game.UserWordArray[i] = letter;
            Game.Changes += 1;
        }
    }
    if(Game.Changes < 1){
        Game.Tries -= 1;
        document.getElementById("tries").innerHTML = Game.Tries;
    }
    Game.UWord = Game.UserWordArray.join("");
    document.getElementById("BANK").innerHTML = Game.UWord;
    Game.Word1 = Game.WordArray.join("");
    Game.Word2 = Game.UserWordArray.join("");
    if(Game.Word1 === Game.Word2) {
        alert("You've guessed the word correctly, you WIN!");
        window.location.reload();   
    }
    if(Game.Tries < 1){
        document.getElementById("BANK").innerHTML = Game.Word1;
        alert("You have ran out of tries, close popup to play again");
        window.location.reload();
    }
}
Game.PullWord();
Game.SetUnderline();