("use strict");

/////////////////////////////////////
// Selecting Elements of Each Player
const Player0El = document.querySelector(".player-0");
const Player1El = document.querySelector(".player-1");

const current0El = document.getElementById("current-0");
const current1El = document.getElementById("current-1");

const score0El = document.querySelector("#score-0");
const score1El = document.querySelector("#score-1");

//////////////////////////////
// Selecting Image
const diceEl = document.querySelector(".dice");

//////////////////////////////
// Selecting Button
const newBtn = document.querySelector(".btn-new");
const rollBtn = document.querySelector(".btn-roll");
const holdBtn = document.querySelector(".btn-hold");

//////////////////////////////
// Required Variables
let scores, currenctScore, activePlayer, playingState;

//////////////////////////////
// Initial Condition
const initial = () => {
  scores = [0, 0];
  activePlayer = 0;
  currenctScore = 0;
  playingState = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add("hidden");

  Player0El.classList.remove("player-winner");
  Player1El.classList.remove("player-winner");

  Player0El.classList.add("player-active");
  Player1El.classList.remove("player-active");
};
initial();

////////////////////////////
// Player Switch Function
const switchPlayer = () => {
  document.getElementById(`current-${activePlayer}`).textContent = 0;

  currenctScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;

  Player0El.classList.toggle("player-active");
  Player1El.classList.toggle("player-active");
};

////////////////////////////
// Roll Dice Function
rollBtn.addEventListener("click", () => {
  if (playingState) {
    // Generate random number
    const dice = Math.trunc(Math.random() * 6) + 1;

    // Display dice
    diceEl.classList.remove("hidden");
    diceEl.src = `./assets/dice-${dice}.png`;

    // Check for rolled 1
    if (dice !== 1) {
      // Add to current Score
      currenctScore += dice;
      document.getElementById(`current-${activePlayer}`).textContent =
        currenctScore;
    } else {
      // Switch Player
      switchPlayer();
    }
  }
});

////////////////////////////
// Hold btn Function
holdBtn.addEventListener("click", () => {
  if (playingState) {
    // Add currentScore to active Player's score
    scores[activePlayer] += currenctScore;

    document.getElementById(`score-${activePlayer}`).textContent =
      scores[activePlayer];

    // Check if player score is >= 100
    if (scores[activePlayer] >= 100) {
      // Game Over
      playingState = false;
      diceEl.classList.add("hidden");

      document
        .querySelector(`.player-${activePlayer}`)
        .classList.add("player-winner");
      document
        .querySelector(`.player-${activePlayer}`)
        .classList.add("player-active");
    } else {
      switchPlayer();
    }
  }
});

////////////////////////////
// Reset btn Function
newBtn.addEventListener("click", initial);
