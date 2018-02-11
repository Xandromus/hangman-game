(function() {
    var starWarsCharacters = ["darth vader", "darth sidious", "darth maul", "darth tyranus", "princess leia", "luke skywalker", "lando calrissian", "anakin skywalker", "padme amidala", "obi-wan kenobi", "yoda", "qui-gon jinn", "chewbacca", "jar jar binks", "han solo", "boba fett"];

    // Randomly chooses a choice from the starWarsCharacter array
      var starWarsRandom = starWarsCharacters[Math.floor(Math.random() * starWarsCharacters.length)];
      console.log(starWarsRandom);



})();