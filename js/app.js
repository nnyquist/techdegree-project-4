/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// variable declarations
let game = '';
const startButton = document.querySelector('#btn__reset');

// event listener
startButton.addEventListener('click', e => {
  game = new Game();
  game.startGame();
})