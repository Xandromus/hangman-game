(function() {
    window.onload = function() {
        var wins = 0;
        var letter;
        var incorrectGuess;
        var starWarsCharacters = ["darth vader", "darth sidious", "darth maul", "darth tyranus", "princess leia", "luke skywalker", "lando calrissian", "anakin skywalker", "padme amidala", "obi-wan kenobi", "yoda", "qui-gon jinn", "chewbacca", "jar jar binks", "han solo", "boba fett"];

        // Randomly chooses a choice from the starWarsCharacters array
        var starWarsRandom = starWarsCharacters[Math.floor(Math.random() * starWarsCharacters.length)];
        console.log(starWarsRandom);
        var nameDisplay = [];
        var counter = starWarsRandom.length;
        var lives;

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
                    letter.innerHTML = " " + "&nbsp";
                } else {
                    letter.innerHTML = "_";
                }

                nameDisplay.push(letter);
                nameHolder.appendChild(letterList);
                letterList.appendChild(letter);
            }
        }

        guesses = function() {
          lives = 10;
          guessesRemaining = document.getElementById('guesses-remaining');
          guessesRemaining.innerHTML = "<p>Number of Guesses Remaining: " + lives + "</p>";
        }


        document.onkeyup = function(event) {
          

            // Determines which key was pressed.
            var userGuess = event.key;
                for (var i = 0; i < starWarsRandom.length; i++) {
                  if ((counter > 1) && (lives > 0)) {
                    if ((starWarsRandom[i] === userGuess) && (userGuess != " ")) {
                        nameDisplay[i].innerHTML = userGuess;
                        counter -= 1;
                        console.log(counter);
                    }
                  }
                }
        }

        display();
        guesses();
        console.log(counter);
        console.log(lives);

    }
})();