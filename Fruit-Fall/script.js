("use strict");

// Number of Fruits
const fruitCount = 10;

// Selecting Elements
const scoreContainer = document.getElementById("score-container");

const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");
const startButton = document.getElementById("start-button");
const coverScreen = document.querySelector(".cover-screen");
const result = document.getElementById("result");
const overText = document.getElementById("over-text");

// Required variables
const baseURL = "./assets/";
let fruits = [];
let points = 0;
const fruitsList = ["apple", "banana", "grapes"];

// Events Object
let events = {
  mouse: {
    down: "mousedown",
  },
  touch: {
    down: "touchstart",
  },
};

let deviceType = "";
let interval, randomCreationTime;

const isTouchDevice = () => {
  try {
    document.createEvent("TouchEvent");
    deviceType = "touch";
    return true;
  } catch (e) {
    deviceType = "mouse";
    return false;
  }
};

// Random Number Generation
const generateRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

// Constructor Function
function Fruit(image, x, y, width) {
  this.image = new Image();
  this.image.src = image;
  this.x = x;
  this.y = y;
  this.speed = generateRandomNumber(1, 5);
  this.width = width;
  this.clicked = false;
  this.complete = false;

  // Move Fruit
  this.update = () => {
    this.y += this.speed;

    if (!this.complete && this.y + this.width > canvas.height) {
      this.complete = true;
    }
  };

  // Draw Fruit
  this.draw = () => {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.width);
  };

  this.compare = (mouseX, mouseY) => {
    return (
      mouseX >= this.x &&
      mouseX <= this.x + this.width &&
      mouseY >= this.y &&
      mouseY <= this.y + this.width
    );
  };
}

// Create a New Fruit
function createRandomFruit() {
  // Set random time for next fruit
  randomCreationTime = generateRandomNumber(3, 9);

  if (fruits.length < fruitCount) {
    let randomFruit =
      fruitsList[generateRandomNumber(0, fruitsList.length - 1)];

    const randomImage = `./assets/${randomFruit}.png`;
    const randomX = generateRandomNumber(0, canvas.width - 50);
    const fruitWidth = generateRandomNumber(100, 200);

    let fruit = new Fruit(randomImage, randomX, 0, fruitWidth);

    fruits.push(fruit);
  }

  if (fruits.length == fruitCount) {
    let checker = fruits.every((fruit) => {
      return fruit.complete == true;
    });

    if (checker) {
      clearInterval(interval);

      coverScreen.classList.remove("hide");
      canvas.classList.add("hide");
      overText.classList.remove("hide");

      result.innerText = `Final Score: ${points}`;

      startButton.innerText = "Restart Game";
      scoreContainer.classList.add("hide");
    }
  }
}

// EventListeners
startButton.addEventListener("click", () => {
  fruits = [];
  points = 0;
  scoreContainer.innerHTML = points;

  canvas.classList.remove("hide");
  coverScreen.classList.add("hide");

  createRandomFruit();

  randomCreationTime = generateRandomNumber(3, 9);
  interval = setInterval(createRandomFruit, randomCreationTime * 1000);

  scoreContainer.classList.remove("hide");
});
