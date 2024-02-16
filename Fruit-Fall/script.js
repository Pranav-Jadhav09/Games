("use strict");

// Number of Fruits
const fruitCount = 10;
const scoreContainer = document.getElementById("score-container");
const startBtn = document.getElementById("start-button");
const coverScreen = document.querySelector(".cover-screen");
const result = document.getElementById("result");
const overText = document.getElementById("over-text");

// Canvas
const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContent("2d");

// Required Variables
const base = "./assets/";
let fruits = [];
let fruitList = ["apple", "banana", "grapes"];

// Event Objects
let events = {
  mouse: {
    down: "mousedown",
  },
  touch: {
    down: "touchstart",
  },
};

let deviceType = "";
