var starWarsCharacters = ["darth vader", "darth sidious", "darth maul", "darth tyranus", "princess leia", "luke skywalker", "lando calrissian", "anakin skywalker", "padme amidala", "obi-wan kenobi", "yoda", "qui-gon jinn", "chewbacca", "jar jar binks", "han solo", "boba fett"];
    var starWarsRandom;
    var nameDisplay = [];
    var wins = 0;
    var correctLetters = [];
    var lettersGuessed;
    var guessesLeft;
    var counter;
    var nonchar;
    var nameHolder = document.getElementById('hold');
      var letterList = document.createElement('ul');

    function newGame() {
        counter = 0;
        nonchar = 0;
      guessesLeft = 7;
      lettersGuessed = [];
      starWarsRandom = starWarsCharacters[Math.floor(Math.random() * starWarsCharacters.length)];
      console.log(starWarsRandom);
      nameDisplay = [];

      


      for (var i = 0; i < starWarsRandom.length; i++) {
                letterList.setAttribute('id', 'name-list');
                var letter = document.createElement('li');
                letter.setAttribute('class', 'letter');
                if (starWarsRandom[i] === "-") {
                    letter.innerHTML = "-";
                    nonchar += 1;
                } else if (starWarsRandom[i] === " ") {
                    letter.innerHTML = " " + "&nbsp&nbsp";
                    nonchar += 1;
                } else {
                    letter.innerHTML = "_";
                }

                nameDisplay.push(letter);
                nameHolder.appendChild(letterList);
                letterList.appendChild(letter);

  document.querySelector("#wins").innerHTML = "Wins: " + wins;
  document.querySelector("#guessesRemaining").innerHTML ="Lives: " + guessesLeft;
  } 
  counter = starWarsRandom.length - nonchar;
  console.log(counter);
    }

    document.onkeyup = function(event) {

          var userGuess = event.key;

          for(var i = 0; i <= lettersGuessed.length-1; i++) {
            if(lettersGuessed[i].indexOf(userGuess) != -1) {
              return false;
            }
          }
         console.log(userGuess);
       if (starWarsRandom.indexOf(userGuess) === -1) {
          lettersGuessed.push(userGuess);
            console.log(lettersGuessed);
          }
          
        for (var i = 0; i < starWarsRandom.length; i++) {
          if ((starWarsRandom[i] === userGuess) && (userGuess != " ")) {
            nameDisplay[i].innerHTML = userGuess;
            correctLetters.push(userGuess);
            counter -= 1;
            console.log(counter);
          }
        }    
            document.querySelector("#usedLetters").innerHTML = lettersGuessed.join(" ");
          
          if (starWarsRandom.indexOf(userGuess) === -1) {
                  --guessesLeft;
                  
                }   
                  document.querySelector("#guessesRemaining").innerHTML ="Number of Guesses Remaining: " + guessesLeft;

                if (guessesLeft === 0){
                  
                  newGame();
                }
                
                if (counter === 0) {
                  wins++;
                  
                  alert("You win!");
                  document.querySelector("#name-list").innerHTML = '';
                  document.querySelector("#usedLetters").innerHTML = '';
                  newGame();
                }
                  document.querySelector("#wins").innerHTML = "Wins: " + wins;                
    }


newGame();
