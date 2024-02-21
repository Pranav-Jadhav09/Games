// Selecting Inputs
const inputs = document.querySelector(".inputs");
const hintTag = document.querySelector(".hint span");
const guessLeft = document.querySelector(".guess-left span");
const wrongLetter = document.querySelector(".wrong-letter span");
const resetBtn = document.querySelector(".reset-btn");
const typingInput = document.querySelector(".typing-input");

// Required Variables
let word,
  maxGuesses,
  incorrectLetters = [],
  correctLetters = [];

// Random Word
function randomWord() {
  let randomItem = wordList[Math.floor(Math.random() * wordList.length)];

  word = randomItem.word;
  maxGuesses = word.length >= 5 ? 8 : 6;

  correctLetters = [];
  incorrectLetters = [];

  hintTag.innerText = randomItem.hint;
  guessLeft.innerText = maxGuesses;
  wrongLetter.innerText = incorrectLetters;

  let html = "";
  for (let i = 0; i < word.length; i++) {
    html += `<input type="text" name="answer-field" disabled>`;
    inputs.innerHTML = html;
  }
}
randomWord();

// Initial Game function
function initGame(e) {
  let key = e.target.value.toLowerCase();

  if (
    key.match(/^[A-Za-z]+$/) &&
    !incorrectLetters.includes(` ${key}`) &&
    !correctLetters.includes(key)
  ) {
    if (word.includes(key)) {
      for (let i = 0; i < word.length; i++) {
        if (word[i] == key) {
          correctLetters += key;

          inputs.querySelectorAll("input")[i].value = key;
        }
      }
    } else {
      maxGuesses--;
      incorrectLetters.push(`${key}`);
    }

    guessLeft.innerText = maxGuesses;
    wrongLetter.innerText = incorrectLetters;
  }
  typingInput.value = "";

  // Timeout
  setTimeout(() => {
    if (correctLetters.length === word.length) {
      alert(`Congrats! You found the word ${word.toUpperCase()}`);

      return randomWord();
    } else if (maxGuesses < 1) {
      alert("Game over! You don't have remaining guesses");

      for (let i = 0; i < word.length; i++) {
        inputs.querySelectorAll("input")[i].value = word[i];
      }
    }
  }, 100);
}

// EventListeners
resetBtn.addEventListener("click", randomWord);
typingInput.addEventListener("input", initGame);
inputs.addEventListener("click", () => typingInput.focus());
document.addEventListener("keydown", () => typingInput.focus());
