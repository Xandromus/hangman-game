(function() {
  window.onload = function () {
    var starWarsCharacters = ["darth vader", "darth sidious", "darth maul", "darth tyranus", "princess leia", "luke skywalker", "lando calrissian", "anakin skywalker", "padme amidala", "obi-wan kenobi", "yoda", "qui-gon jinn", "chewbacca", "jar jar binks", "han solo", "boba fett"];

    // Randomly chooses a choice from the starWarsCharacter array
      var starWarsRandom = starWarsCharacters[Math.floor(Math.random() * starWarsCharacters.length)];
      console.log(starWarsRandom);
      var nameDisplay = [ ];
      
       result = function () {
    nameHolder = document.getElementById('hold');
    correct = document.createElement('ul');

    for (var i = 0; i < starWarsRandom.length; i++) {
      correct.setAttribute('id', 'name-list');
      letter = document.createElement('li');
      letter.setAttribute('class', 'letter');
      if (starWarsRandom[i] === "-") {
        letter.innerHTML = "-";
        space = 1;
      } else if (starWarsRandom[i] === " ") {
        letter.innerHTML = " ";
        space = 1;
      } else {
        letter.innerHTML = "_";
      }

      nameDisplay.push(letter);
      nameHolder.appendChild(correct);
      correct.appendChild(letter);
    }
  }
result();
}
})();