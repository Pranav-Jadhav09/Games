"use strict";

// Define base URL for images
const baseURL = `./assets/`;

// Selecting Elements
const cardContainer = document.querySelector(".cards");
const timeTag = document.querySelector(".time b");
const flipsTag = document.querySelector(".flips b");
const restartBtn = document.querySelector(".details button");

// Required Variables
let maxTime = 25;
let timeLeft = maxTime;
let flips = 0;
let matchedCard = 0;
let disableDeck = false;
let isPlaying = false;
let card1, card2, timer;

// Function initial Timer
function initialTimer() {
  if (timeLeft <= 0) {
    return clearInterval(timer);
  }
  timeLeft--;
  timeTag.innerText = timeLeft;
}

// Function FlipCard
function flipCard({ target: clickedCard }) {
  if (!isPlaying) {
    isPlaying = true;
    timer = setInterval(initialTimer, 1000);
  }
  if (clickedCard !== card1 && !disableDeck && timeLeft > 0) {
    flips++;
    flipsTag.innerText = flips;
    clickedCard.classList.add("flip");
    if (!card1) {
      return (card1 = clickedCard);
    }

    card2 = clickedCard;
    disableDeck = true;
    let card1Img = card1.querySelector(".back-view img").src,
      card2Img = card2.querySelector(".back-view img").src;
    matchCard(card1Img, card2Img);
  }
}

// Function MatchCard
function matchCard(img1, img2) {
  if (img1 === img2) {
    matchedCard++;
    if (matchedCard == 6 && timeLeft > 0) {
      return clearInterval(timer);
    }
    card1.removeEventListener("click", flipCard);
    card2.removeEventListener("click", flipCard);
    card1 = card2 = "";
    return (disableDeck = false);
  }

  setTimeout(() => {
    card1.classList.add("shake");
    card2.classList.add("shake");
  }, 400);

  setTimeout(() => {
    card1.classList.remove("shake", "flip");
    card2.classList.remove("shake", "flip");
    card1 = card2 = "";
    disableDeck = false;
  }, 1200);
}

// Function to create a card element
function createCard(imgSrc) {
  const card = document.createElement("li");
  card.classList.add("card");

  const frontView = document.createElement("div");
  frontView.classList.add("view", "front-view");
  const questionIcon = document.createElement("img");
  questionIcon.src = "./assets/que_icon.svg";
  questionIcon.alt = "question-icon";
  frontView.appendChild(questionIcon);

  const backView = document.createElement("div");
  backView.classList.add("view", "back-view");
  const cardImage = document.createElement("img");
  cardImage.src = imgSrc;
  cardImage.alt = "card-image";
  backView.appendChild(cardImage);

  card.appendChild(frontView);
  card.appendChild(backView);

  card.addEventListener("click", flipCard);

  return card;
}

// Function to shuffle an array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Function to initialize the game
function initializeGame() {
  timeLeft = maxTime;
  flips = matchedCard = 0;
  card1 = card1 = "";
  clearInterval(timer);
  timeTag.innerText = timeLeft;
  flipsTag.innerText = flips;
  disableDeck = isPlaying = false;

  // Generate and append new cards
  let imgIndexes = Array.from({ length: 6 }, (_, i) => i + 1);
  imgIndexes = imgIndexes.concat(imgIndexes); // Duplicate each index to have pairs
  shuffleArray(imgIndexes);

  cardContainer.innerHTML = ""; // Clear existing cards

  imgIndexes.forEach((index) => {
    const card = createCard(`${baseURL}img-${index}.png`);
    cardContainer.appendChild(card);
  });
}

// Initialize the game
initializeGame();

// Add event listener for restart button
restartBtn.addEventListener("click", initializeGame);
