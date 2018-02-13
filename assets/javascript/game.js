var starWarsCharacters = {
    characters: [{
        name: "darth vader",
        image: "assets/images/place.png",
        song: "assets/songs/place.mp3"
    },
    {
        name: "darth sidious",
        image: "assets/images/place.png",
        song: "assets/songs/place.mp3"
    },
    {
        name: "darth maul",
        image: "assets/images/place.png",
        song: "assets/songs/place.mp3"
    },
    {
        name: "darth tyranus",
        image: "assets/images/place.png",
        song: "assets/songs/place.mp3"
    },
    {
        name: "princess leia",
        image: "assets/images/place.png",
        song: "assets/songs/place.mp3"
    },
    {
        name: "luke skywalker",
        image: "assets/images/place.png",
        song: "assets/songs/place.mp3"
    },
    {
        name: "lando calrissian",
        image: "assets/images/place.png",
        song: "assets/songs/place.mp3"
    },
    {
        name: "anakin skywalker",
        image: "assets/images/place.png",
        song: "assets/songs/place.mp3"
    },
    {
        name: "padme amidala",
        image: "assets/images/place.png",
        song: "assets/songs/place.mp3"
    },
    {
        name: "obi-wan kenobi",
        image: "assets/images/place.png",
        song: "assets/songs/place.mp3"
    },
    {
        name: "yoda",
        image: "assets/images/place.png",
        song: "assets/songs/place.mp3"
    },
    {
        name: "qui-gon jinn",
        image: "assets/images/place.png",
        song: "assets/songs/place.mp3"
    },
    {
        name: "chewbacca",
        image: "assets/images/place.png",
        song: "assets/songs/place.mp3"
    },
    {
        name: "jar jar binks",
        image: "assets/images/place.png",
        song: "assets/songs/place.mp3"
    },
    {
        name: "han solo",
        image: "assets/images/place.png",
        song: "assets/songs/place.mp3"
    },
    {
        name: "boba fett",
        image: "assets/images/place.png",
        song: "assets/songs/place.mp3"
    }]
};

console.log(starWarsCharacters.characters[1].name);

// var starWarsCharacters = ["darth vader", "darth sidious", "darth maul", "darth tyranus", "princess leia", "luke skywalker", "lando calrissian", "anakin skywalker", "padme amidala", "obi-wan kenobi", "yoda", "qui-gon jinn", "chewbacca", "jar jar binks", "han solo", "boba fett"];
var starWarsRandom;
var nameDisplay = [];
var wins = 0;
var correctLetters = [];
var lettersGuessed;
var guessesLeft;
var nameHolder = document.getElementById('hold');
var letterList = document.createElement('ul');

function newGame() {
    guessesLeft = 7;
    lettersGuessed = [];
    starWarsRandom = starWarsCharacters.characters[Math.floor(Math.random() * starWarsCharacters.characters.length)].name;
    console.log(starWarsRandom);
    nameDisplay = [];

    for (var i = 0; i < starWarsRandom.length; i++) {
        letterList.setAttribute('id', 'name-list');
        var letter = document.createElement('li');
        letter.setAttribute('class', 'letter');
        if (starWarsRandom[i] === "-") {
            letter.innerHTML = "-";
        } else if (starWarsRandom[i] === " ") {
            letter.innerHTML = " ";
            letter.classList.add('space');
        } else {
            letter.innerHTML = "_";
        }

        nameDisplay.push(letter);
        nameHolder.appendChild(letterList);
        letterList.appendChild(letter);

        document.querySelector("#wins").innerHTML = "Wins: " + wins;
        document.querySelector("#guessesRemaining").innerHTML = "Number of Guesses Remaining: " + guessesLeft;
    }

}

document.onkeyup = function(event) {

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
    }

    for (var i = 0; i < starWarsRandom.length; i++) {
        if ((starWarsRandom[i] === userGuess) && (userGuess != " ")) {
            nameDisplay[i].innerHTML = userGuess;
            correctLetters.push(userGuess);
        }
    }
    document.querySelector("#usedLetters").innerHTML = lettersGuessed.join(" ");

    if (starWarsRandom.indexOf(userGuess) === -1) {
        --guessesLeft;

    }
    document.querySelector("#guessesRemaining").innerHTML = "Number of Guesses Remaining: " + guessesLeft;

    if (guessesLeft === 0) {
        alert("You lose!");
        document.querySelector("#name-list").innerHTML = '';
        document.querySelector("#usedLetters").innerHTML = '';
        newGame();
    }

    var winCheck = "";
    for (var j = 0; j < starWarsRandom.length; j++) {
        winCheck = winCheck + document.getElementsByClassName('letter')[j].textContent;
    }
    console.log(winCheck);
    if (winCheck === starWarsRandom) {
        wins++;

        alert("You win!");
        document.querySelector("#name-list").innerHTML = '';
        document.querySelector("#usedLetters").innerHTML = '';
        newGame();
    }
    document.querySelector("#wins").innerHTML = "Wins: " + wins;
}


newGame();