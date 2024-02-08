("use strict");

///////////////////////
// Selecting Elements
const gameContainer = document.querySelector(".container");
const userResult = document.querySelector(".userResult img");
const cpuResult = document.querySelector(".cpuResult img");
const resultText = document.querySelector(".resultText");
const optionImages = document.querySelectorAll(".optionImg");

/**
 * Loop through each option image element
 */
optionImages.forEach((image, index) => {
  image.addEventListener("click", (e) => {
    image.classList.add("active");

    // Initial Stage
    userResult.src = cpuResult.src = `./assets/rock.png`;
    resultText.textContent = `Wait...`;

    // Onclicking button start animation
    gameContainer.classList.add("start");

    // Set a timeout to delay the result calculations
    let time = setTimeout(() => {
      gameContainer.classList.remove("start");

      // Get Source of the clicked option image
      let imageSrc = e.target.querySelector("img").src;
      userResult.src = imageSrc;

      // Generate a random number b/w 0 & 2
      let randomNum = Math.floor(Math.random() * 3);

      // Array of CPU image options
      let cpuImages = [
        `./assets/rock.png`,
        `./assets/paper.png`,
        `./assets/scissors.png`,
      ];

      // Set CPU image to a random option from the array
      cpuResult.src = cpuImages[randomNum];

      // Assign a letter value to CPU options
      let cpuValue = [`R`, `P`, `S`][randomNum];

      // Assign a letter value to User clicked option
      let userValue = [`R`, `P`, `S`][index];

      // Object of all outcomes
      // User & CPU
      let outComes = {
        RR: `Draw`,
        PP: `Draw`,
        SS: `Draw`,
        RS: `User`,
        PR: `User`,
        SP: `User`,
        RP: `CPU`,
        PS: `CPU`,
        SR: `CPU`,
      };

      // Look upto outcome value based on user & cpu options
      let outComeValue = outComes[userValue + cpuValue];

      // Displat Text Result
      resultText.textContent =
        userValue === cpuValue ? `Match Draw` : `${outComeValue} Won!`;
    }, 2750);
  });
});
