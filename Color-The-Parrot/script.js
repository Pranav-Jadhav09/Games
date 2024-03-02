("use strict");

// Selecting Elements

// Body
const bodyBtn = document.getElementById("body-btn");

// Wing
const mainWingBtn = document.getElementById("main-wing-btn");
const subWingBtn = document.getElementById("sub-wing-btn");

// Beak
const upperBeakBtn = document.getElementById("upper-beak-btn");
const lowerBeakBtn = document.getElementById("lower-beak-btn");

// Claw
const clawBtn = document.getElementById("claw-btn");

// Tail Wing
const tailWingBtn = document.getElementById("tail-wing-Btn");
const headWingBtn = document.getElementById("head-wing-btn");

// Eyes
const eyePatchBtn = document.getElementById("eye-patch-btn");
const eyeBtn = document.getElementById("eye-btn");

// Colors
const colors = [
  "#cd0000",
  "#f03800",
  "#ffb64c",
  "#ff9100",
  "#0095ff",
  "#1fbf66",
  "#ff4380",
  "#deecf1",
  "#714c2f",
  "#7fe881",
  "#f7006a",
];

// Counter
let counter1 = 0;
let counter2 = 0;
let counter3 = 0;
let counter4 = 0;
let counter5 = 0;
let counter6 = 0;
let counter7 = 0;
let counter8 = 0;
let counter9 = 0;
let counter10 = 0;

/**
 * @param {Number} counter
 * @returns {Number} counter value
 */
function setCounterValue(counter) {
  return counter < colors.length - 1 ? counter + 1 : 0;
}

// EventListeners

// Body
bodyBtn.addEventListener("click", () => {
  document.querySelectorAll(".body-clr").forEach((item) => {
    item.style.backgroundColor = colors[counter1];
  });

  document.querySelector(".wing-color2-inner").style.borderTopColor =
    colors[counter1];

  // Set Counter New
  counter1 = setCounterValue(counter1);
});

// Wing
mainWingBtn.addEventListener("click", () => {
  document.querySelector(".wing-color1").style.backgroundColor =
    colors[counter2];

  // Set Counter New
  counter2 = setCounterValue(counter2);
});

subWingBtn.addEventListener("click", () => {
  document.querySelector(".wing-color2").style.borderTopColor =
    colors[counter3];

  // Set Counter New
  counter3 = setCounterValue(counter3);
});

// Beak
upperBeakBtn.addEventListener("click", () => {
  document.querySelector(".beak-upper").style.backgroundColor =
    colors[counter4];

  // Set Counter New
  counter4 = setCounterValue(counter4);
});

lowerBeakBtn.addEventListener("click", () => {
  document.querySelector(".beak-lower").style.backgroundColor =
    colors[counter5];

  // Set Counter New
  counter5 = setCounterValue(counter5);
});

// Claw
clawBtn.addEventListener("click", () => {
  document.querySelector(".leg").style.backgroundColor = colors[counter6];

  // Set Counter New
  counter6 = setCounterValue(counter6);
});

// Tail Wing
tailWingBtn.addEventListener("click", () => {
  document
    .querySelectorAll(".tail-wing")
    .forEach((item) => (item.style.backgroundColor = colors[counter7]));

  // Set Counter New
  counter7 = setCounterValue(counter7);
});

headWingBtn.addEventListener("click", () => {
  document.querySelector(".feather").style.backgroundColor = colors[counter8];

  // Set Counter New
  counter8 = setCounterValue(counter8);
});

// Eye
eyePatchBtn.addEventListener("click", () => {
  document.querySelector(".eye-patch").style.backgroundColor = colors[counter9];

  // Set Counter New
  counter9 = setCounterValue(counter9);
});

eyeBtn.addEventListener("click", () => {
  document.querySelector(".eye").style.backgroundColor = colors[counter10];

  // Set Counter New
  counter10 = setCounterValue(counter10);
});
