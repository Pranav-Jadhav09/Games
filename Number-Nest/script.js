("use strict");

// Generate Number
let score = 20;
let highScore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

/**
 * Function to display message
 * @param {*} message Message passed as argument
 */
const displayMessage = (message) => {
  document.querySelector(".message").textContent = message;
};

/**
 * Check Button Event Logic
 */
document.querySelector(".check").addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);

  // When there is no input
  if (!guess) {
    displayMessage(`⛔️ No Number!`);
  }
  // When Player Wins
  else if (guess === secretNumber) {
    displayMessage(`🎉 Correct Number!`);
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    // Changing High Score Value
    if (score > highScore) {
      highScore = score;

      document.querySelector(".highScore").textContent = highScore;
    }
  }
  // When guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too High" : "📉 Too Low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage(`💥 You Lost The Game`);
      document.querySelector(".score").textContent = 0;
      document.querySelector(".check").style.cursor = "none";
    }
  }
});

/**
 * Again Button Event Logic
 */
document.querySelector(".again").addEventListener("click", () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage(`Start guessing...`);
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".check").style.cursor = "pointer";
});
