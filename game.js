
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const ul = phrase.querySelector('ul');

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

//random phrase array function
function getRandomPhraseArray(arr) {
  let randomPhrase = arr[Math.floor(Math.random() * arr.length)];
  return randomPhrase.split('');
}

//setting the game display
function addPhraseToDisplay(arr) {
  for (let i = 0; i < arr.length; i++) {
    li = document.createElement('li');
    if (arr[i] != ' ') {
      li.className = 'letter';
      li.textContent = arr[i];
      ul.appendChild(li);
    } else {
      li.className = 'space';
      li.textContent = arr[i];
      ul.appendChild(li);
    }
  }
}

const phraseArray = getRandomPhraseArray(phrases);
addPhraseToDisplay(phraseArray);
