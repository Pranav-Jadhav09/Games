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
