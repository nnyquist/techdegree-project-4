/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// variable declarations
let game = "";
const startButton = document.querySelector("#btn__reset");
const qwerty = document.querySelector("#qwerty");

// event listener
startButton.addEventListener("click", e => {
  game = new Game();
  game.startGame();
});

// event listener for button presses on keyboard
qwerty.addEventListener("click", e => {
  if (e.target.className === "key") {
    game.handleInteraction(e.target);
  }
});

window.addEventListener("keydown", e => {
  const letter = e.key;
  const buttons = document.querySelectorAll("button.key");
  for (let i = 0; i < buttons.length; i++) {
    if (buttons[i].textContent === letter) {
      game.handleInteraction(buttons[i]);
    }
  }
});
