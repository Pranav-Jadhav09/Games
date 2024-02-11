"use strict";

// Define base URL for images
const baseURL = "./assets/";

// Define card data
const cardData = [];

// Define the number of unique images
const numOfUniqueImages = 8;

// Generate card data with unique images
for (let i = 1; i <= numOfUniqueImages; i++) {
  cardData.push({ backImg: `img-${i}.png` });
  cardData.push({ backImg: `img-${i}.png` });
}

// Function to create a single card element
function createCard(backImg) {
  const card = document.createElement("li");
  card.className = "card";

  const frontView = document.createElement("div");
  frontView.className = "view front-view";
  const frontImgElem = document.createElement("img");
  frontImgElem.src = `${baseURL}que_icon.svg`;
  frontImgElem.alt = "icon";
  frontView.appendChild(frontImgElem);

  const backView = document.createElement("div");
  backView.className = "view back-view";
  const backImgElem = document.createElement("img");
  backImgElem.src = `${baseURL}${backImg}`;
  backImgElem.alt = "card-img";
  backView.appendChild(backImgElem);

  card.appendChild(frontView);
  card.appendChild(backView);

  return card;
}

// Function to initialize the cards
function initCards() {
  const cardsContainer = document.querySelector(".cards");
  cardData.forEach((data) => {
    const card = createCard(data.backImg);
    cardsContainer.appendChild(card);
  });

  // Selecting Elements
  const cards = document.querySelectorAll(".card");

  // Required Variables
  let matched = 0;
  let card1, card2;
  let disableDeck = false;

  // Flip Card Function
  function flipCard({ target: clickedCard }) {
    if (card1 !== clickedCard && !disableDeck) {
      clickedCard.classList.add("flip");

      if (!card1) {
        return (card1 = clickedCard);
      }
      card2 = clickedCard;
      disableDeck = true;

      let card1Img = card1.querySelector(".back-view img").src;
      let card2Img = card2.querySelector(".back-view img").src;
      matchCards(card1Img, card2Img);
    }
  }

  // Match Card Function
  function matchCards(img1, img2) {
    if (img1 === img2) {
      matched++;
      if (matched == 8) {
        setTimeout(() => {
          return shuffleCard();
        }, 1000);
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

  // Shuffle Card Function
  function shuffleCard() {
    matched = 0;
    disableDeck = false;
    card1 = card2 = "";

    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];

    arr.sort(() => (Math.random() > 0.5 ? 1 : -1));

    cards.forEach((card, i) => {
      card.classList.remove("flip");

      let imgTag = card.querySelector(".back-view img");
      imgTag.src = `./assets/img-${arr[i]}.png`;
      card.addEventListener("click", flipCard);
    });
  }
  shuffleCard();

  // Flip card event on all cards
  cards.forEach((card) => {
    card.addEventListener("click", flipCard);
  });
}

// Call the initialization function when the page loads
window.onload = initCards;
