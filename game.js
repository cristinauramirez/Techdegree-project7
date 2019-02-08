
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');

const startGame = document.querySelector('a');

let missed = 0;

//start game event listener
startGame.addEventListener('click', (e) => {
  overlay.style.display = 'none';
});
