 (function() {

     // object containing an array of characters and their key value pairs
     var starWarsCharacters = {
         characters: [{
                 name: "darth vader",
                 image: "assets/images/darthvader.png",
                 song: "assets/songs/darthvader.mp3"
             },
             {
                 name: "darth sidious",
                 image: "assets/images/darthsidious.png",
                 song: "assets/songs/darthsidious.mp3"
             },
             {
                 name: "darth maul",
                 image: "assets/images/darthmaul.png",
                 song: "assets/songs/darthmaul.mp3"
             },
             {
                 name: "darth tyranus",
                 image: "assets/images/darthtyranus.png",
                 song: "assets/songs/darthtyranus.mp3"
             },
             {
                 name: "princess leia",
                 image: "assets/images/princessleia.png",
                 song: "assets/songs/princessleia.mp3"
             },
             {
                 name: "luke skywalker",
                 image: "assets/images/lukeskywalker.png",
                 song: "assets/songs/lukeskywalker.mp3"
             },
             {
                 name: "lando calrissian",
                 image: "assets/images/landocalrissian.png",
                 song: "assets/songs/landocalrissian.mp3"
             },
             {
                 name: "anakin skywalker",
                 image: "assets/images/anakinskywalker.png",
                 song: "assets/songs/anakinskywalker.mp3"
             },
             {
                 name: "padme amidala",
                 image: "assets/images/padmeamidala.png",
                 song: "assets/songs/padmeamidala.mp3"
             },
             {
                 name: "obi-wan kenobi",
                 image: "assets/images/obiwankenobi.png",
                 song: "assets/songs/obiwankenobi.mp3"
             },
             {
                 name: "yoda",
                 image: "assets/images/yoda.png",
                 song: "assets/songs/yoda.mp3"
             },
             {
                 name: "qui-gon jinn",
                 image: "assets/images/quigonjinn.png",
                 song: "assets/songs/quigonjinn.mp3"
             },
             {
                 name: "chewbacca",
                 image: "assets/images/chewbacca.png",
                 song: "assets/songs/chewbacca.mp3"
             },
             {
                 name: "jar jar binks",
                 image: "assets/images/jarjarbinks.png",
                 song: "assets/songs/jarjarbinks.mp3"
             },
             {
                 name: "han solo",
                 image: "assets/images/hansolo.png",
                 song: "assets/songs/hansolo.mp3"
             },
             {
                 name: "boba fett",
                 image: "assets/images/bobafett.png",
                 song: "assets/songs/bobafett.mp3"
             }
         ]
     };

     // gameplay variables
     var alphabet = "abcdefghijklmnopqrstuvwxyz";
     var random;
     var starWarsRandom;
     var starWarsImage;
     var starWarsSong;
     var nameDisplay = [];
     var wins = 0;
     var lettersGuessed;
     var guessesLeft;

     // div where letters from random character will be placed
     var nameHolder = document.getElementById("hold");

     // ul inside hold div
     var letterList = document.createElement("ul");

     // function that runs every time a new game starts
     function newGame() {

         // number of guesses is initialized
         guessesLeft = 7;

         // array to store characters that the user has already guessed
         lettersGuessed = [];

         // random number generated
         random = Math.floor(Math.random() * starWarsCharacters.characters.length);

         // random variables for for name, image, and song are given the index of the random number
         starWarsRandom = starWarsCharacters.characters[random].name;
         starWarsImage = starWarsCharacters.characters[random].image;
         starWarsSong = starWarsCharacters.characters[random].song;

         // arrray to contain individual letters from the random character name
         nameDisplay = [];

         // a li is created for every letter in the random character name
         for (var i = 0; i < starWarsRandom.length; i++) {

             // letterList ul is given id
             letterList.setAttribute("id", "name-list");
             var letter = document.createElement("li");

             // each li is given a class name
             letter.setAttribute("class", "letter");

             // hyphens and spaces are displayed the same
             if (starWarsRandom[i] === "-") {
                 letter.innerHTML = "-";
             } else if (starWarsRandom[i] === " ") {
                 letter.innerHTML = " ";

                 // spaces receive special class to increase padding
                 letter.classList.add("space");
             } else {

                 // all other letters are displayed as underscores
                 letter.innerHTML = "_";
             }

             // each letter is pushed into the nameDisplay array
             nameDisplay.push(letter);

             // the letterList ul is appended to the nameHolder div
             nameHolder.appendChild(letterList);

             // each letter li is appended to the letterList ul
             letterList.appendChild(letter);

             // Wins and guesses remaining display updated totals
             document.querySelector("#wins").innerHTML = "Wins: " + wins;
             document.querySelector("#guessesRemaining").innerHTML = "<p>Guesses Remaining: " + guessesLeft + "</p>";
         }
     }

     // keyup function to capture user input
     document.onkeyup = function(event) {

         // each key pressed by the user is stored as a variable
         var userGuess = event.key;

         // makes certain that user input is a lowercase alpha character
         if (alphabet.indexOf(userGuess) != -1) {

             // makes certain that user input isn't a duplicate
             for (var i = 0; i <= lettersGuessed.length - 1; i++) {
                 if (lettersGuessed[i].indexOf(userGuess) != -1) {
                     return false;
                 }
             }

             // pushes incorrect letters from user that aren't duplicates into lettersGuessed array
             if (starWarsRandom.indexOf(userGuess) === -1) {
                 lettersGuessed.push(userGuess);
             }

             // li displaying character name letters updates if user input is correct
             for (var i = 0; i < starWarsRandom.length; i++) {
                 if ((starWarsRandom[i] === userGuess) && (userGuess != " ")) {
                     nameDisplay[i].innerHTML = userGuess;
                 }
             }

             // removes commas from display of already guessed letters
             document.querySelector("#usedLetters").innerHTML = lettersGuessed.join(" ");

             // decreases number of guesses remaining if user input is incorrect
             if (starWarsRandom.indexOf(userGuess) === -1) {
                 --guessesLeft;
             }

             // updates display of number of guesses remaining
             document.querySelector("#guessesRemaining").innerHTML = "<p>Guesses Remaining: " + guessesLeft + "</p>";

             // if user runs out of guesses, the display updates with a losing message, image, and song
             if (guessesLeft === 0) {
                 document.querySelector("#image-holder").innerHTML = "<h2>Heh heh heh!</h2><img src='assets/images/lose.png' class='portrait' alt='salacious crumb' />";
                 document.querySelector("#musicSource").src = "assets/songs/lose.mp3";
                 audio.load();
                 audio.play();
                 document.querySelector("#game-status").innerHTML = "<p>YOU LOST! TRY AGAIN!</p>";

                 // the name display and used letters are refreshed
                 document.querySelector("#name-list").innerHTML = "";
                 document.querySelector("#usedLetters").innerHTML = "";

                 // a new game starts
                 newGame();
             }

             // variable to determine if user has won game
             var winCheck = "";

             // the text content from the screen display is concatenated for every letter in the random character name and updates each time the user inputs a letter
             for (var j = 0; j < starWarsRandom.length; j++) {
                 winCheck = winCheck + document.getElementsByClassName("letter")[j].textContent;
             }

             // the user wins once the concatenated string matches the random character name
             if (winCheck === starWarsRandom) {

                 // number of wins increases by one
                 wins++;

                 // if user wins, the display updates with a winning message and a corresponding image and song for the random character
                 document.querySelector("#image-holder").innerHTML = "<h2>" + starWarsRandom + "</h2><img src='" + starWarsImage + "' class='portrait' alt='" + starWarsRandom + "' />";
                 document.querySelector("#musicSource").src = starWarsSong;

                 //audio is loaded and played
                 audio.load();
                 audio.play();
                 document.querySelector("#game-status").innerHTML = "<p>YOU WON! KEEP IT UP!</p>";

                 // the name display and used letters are refreshed
                 document.querySelector("#name-list").innerHTML = "";
                 document.querySelector("#usedLetters").innerHTML = "";

                 // a new game starts
                 newGame();
             }

             // wins display updates with new total
             document.querySelector("#wins").innerHTML = "Wins: " + wins;
         }
     }

     // game function is called
     newGame();

 })();