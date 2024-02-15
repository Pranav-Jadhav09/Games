// Selecting DOM elements
const wordText = document.querySelector(".word"); // Selects the element with the class "word"
const timeText = document.querySelector(".time b"); // Selects the <b> element inside an element with the class "time"
const inputField = document.querySelector("input"); // Selects the <input> element
const hintText = document.querySelector(".hint span"); // Selects the <span> element inside an element with the class "hint"
const checkBtn = document.querySelector(".check-word"); // Selects the element with the class "check-word"
const refreshBtn = document.querySelector(".refresh-word"); // Selects the element with the class "refresh-word"

let correctWord, timer; // Declaring variables to hold the correct word and timer

/**
 * Initializes the timer for the game
 * @param {number} maxTime - Maximum time in seconds
 */
const initTimer = (maxTime) => {
  clearInterval(timer); // Clears any existing timer

  // Starts a new timer
  timer = setInterval(() => {
    if (maxTime > 0) {
      maxTime--;
      return (timeText.innerText = maxTime); // Updates the time displayed
    }
    // Alerts when time runs out and shows the correct word
    alert(`Time off! ${correctWord.toUpperCase()} was the correct word`);
    initGame(); // Resets the game
  }, 1000); // Timer interval: 1 second
};

/**
 * Initializes the game
 */
const initGame = () => {
  initTimer(30); // Starts the timer with 30 seconds

  // Selects a random word from the "words" array
  let randomObj = words[Math.floor(Math.random() * words.length)];
  let wordArray = randomObj.word.split(""); // Splits the word into an array of characters

  // Shuffles the characters of the word randomly
  for (let i = wordArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
  }

  // Updates the displayed word, hint, and resets input field
  wordText.innerText = wordArray.join("");
  hintText.innerText = randomObj.hint;
  correctWord = randomObj.word.toLowerCase();
  inputField.value = "";

  inputField.setAttribute("maxlength", correctWord.length); // Sets maximum input length
};
initGame(); // Calls the initGame function when the page loads

/**
 * Checks if the entered word is correct
 * @returns {String} - Alert message
 */
const checkWord = () => {
  let userWord = inputField.value.toLowerCase(); // Retrieves the user's input and converts it to lowercase

  // Checks if the input field is empty
  if (!userWord) return alert("Please enter the word to check!");

  // Checks if the entered word is incorrect
  if (userWord !== correctWord)
    return alert(`Oops! ${userWord} is not the correct word`);

  // Displays congratulations message if the word is correct and resets the game
  alert(`Congrats! ${correctWord.toUpperCase()} is the correct word`);
  initGame();
};

// Event listeners for button clicks
refreshBtn.addEventListener("click", initGame); // Calls initGame when refresh button is clicked
checkBtn.addEventListener("click", checkWord); // Calls checkWord when check button is clicked
