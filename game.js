
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');

const startGame = document.querySelector('a');

let missed = 0;

let phrases = [
  'Never Walk Alone',
  'Spring Day',
  'Serendipity',
  'So Fat Away',
  'Night Drive'
];

//start game event listener
startGame.addEventListener('click', (e) => {
  overlay.style.display = 'none';
});
