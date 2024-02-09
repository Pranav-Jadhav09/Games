("use strict");

////////////////////////
// Selecting Elements
let refBtn = document.querySelectorAll(".button-option");
const refPopup = document.querySelector(".popup");
const restartBtn = document.getElementById("restart");
const newGameBtn = document.getElementById("new-game");
const refMsg = document.getElementById("message");

// Array of wining combos
let winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],

  [1, 4, 7],
  [0, 3, 6],
  [2, 5, 8],

  [0, 4, 8],
  [2, 4, 6],
];

// Player X plays first
let xTurn = true;
let count = 0;

// Disable Buttons function
const disableBtns = () => {
  refBtn.forEach((cell) => {
    cell.disabled = true;
  });

  refPopup.classList.remove("hide");
};

// Enable Buttons function
const enableBtns = () => {
  refBtn.forEach((cell) => {
    cell.innerText = "";
    cell.disabled = false;
  });

  refPopup.classList.add("hide");
};

// Events on Buttons - New Game & Restart
newGameBtn.addEventListener("click", () => {
  count = 0;
  enableBtns();
});

restartBtn.addEventListener("click", () => {
  count = 0;
  enableBtns();
});

// The Win function
const winFunction = (letter) => {
  disableBtns();

  if (letter == "X") {
    refMsg.innerHTML = `&#x1F389; <br> 'X' Wins`;
  } else {
    refMsg.innerHTML = `&#x1F389; <br> 'O' Wins`;
  }
};

// DrawResult function
const drawResult = () => {
  disableBtns();
  refMsg.innerHTML = `&#x1F60E; <br> It's a Draw`;
};

// check winner function
const checkWinner = () => {
  for (let i of winningCombos) {
    let [cell1, cell2, cell3] = [
      refBtn[i[0]].innerText,
      refBtn[i[1]].innerText,
      refBtn[i[2]].innerText,
    ];

    if (cell1 != "" && cell2 != "" && cell3 != "") {
      if (cell1 == cell2 && cell2 == cell3) {
        winFunction(cell1);
      }
    }
  }
};

// Display X or O onclick
refBtn.forEach((cell) => {
  cell.addEventListener("click", () => {
    if (xTurn) {
      xTurn = false;
      cell.innerText = `X`;
      cell.disabled = true;
    } else {
      xTurn = true;
      cell.innerText = `O`;
      cell.disabled = true;
    }

    count++;
    if (count == 9) {
      drawResult();
    }

    checkWinner();
  });
});

// Onload EnableBtnd
window.onload = enableBtns;
