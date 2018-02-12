(function() {
    window.onload = function() {
        var wins = 0;
        var letter;
        var incorrectGuess;
        var lettersGuessed = [];
        var starWarsCharacters = ["darth vader", "darth sidious", "darth maul", "darth tyranus", "princess leia", "luke skywalker", "lando calrissian", "anakin skywalker", "padme amidala", "obi-wan kenobi", "yoda", "qui-gon jinn", "chewbacca", "jar jar binks", "han solo", "boba fett"];

        // Randomly chooses a choice from the starWarsCharacters array
        var starWarsRandom = starWarsCharacters[Math.floor(Math.random() * starWarsCharacters.length)];
        console.log(starWarsRandom);
        var nameDisplay = [];
        var counter = starWarsRandom.length;
        var guessesLeft;

        display = function() {
            nameHolder = document.getElementById('hold');
            letterList = document.createElement('ul');

            for (var i = 0; i < starWarsRandom.length; i++) {
                letterList.setAttribute('id', 'name-list');
                letter = document.createElement('li');
                letter.setAttribute('class', 'letter');
                if (starWarsRandom[i] === "-") {
                    letter.innerHTML = "-";
                } else if (starWarsRandom[i] === " ") {
                    letter.innerHTML = " " + "&nbsp&nbsp";
                } else {
                    letter.innerHTML = "_";
                }

                nameDisplay.push(letter);
                nameHolder.appendChild(letterList);
                letterList.appendChild(letter);
            }
        }

        guesses = function() {
            guessesLeft = 10;
            guessesRemaining = document.getElementById('guesses-remaining');
            guessesRemaining.innerHTML = "<p>Number of Guesses Remaining: " + guessesLeft + "</p>";
        }


        document.onkeyup = function(event) {

          if ((guessesLeft > 0) && (counter > 1)) {
            // Determines which key was pressed.
            var userGuess = event.key;

            for (var i = 0; i <= lettersGuessed.length - 1; i++) {
                if (lettersGuessed[i].indexOf(userGuess) != -1) {
                    return false;
                }
            }
            console.log(userGuess);
            if (starWarsRandom.indexOf(userGuess) === -1) {
                lettersGuessed.push(userGuess);
                console.log(lettersGuessed);
                --guessesLeft;
                guessesRemaining = document.getElementById('guesses-remaining');
                guessesRemaining.innerHTML = "<p>Number of Guesses Remaining: " + guessesLeft + "</p>";
                console.log(guessesLeft);
            }

            document.querySelector("#used-letters").innerHTML = lettersGuessed.join(" ");

            for (var i = 0; i < starWarsRandom.length; i++) {
                    if ((starWarsRandom[i] === userGuess) && (userGuess != " ")) {
                        nameDisplay[i].innerHTML = userGuess;
                        counter -= 1;
                        console.log(counter);
                    }
                }
          } else {

          }
        }



        display();
        guesses();
        console.log(counter);
        console.log(guessesLeft);

    }
})();