/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  /**
   * Constructor receives no parameters
   * missed - tracks the number of missed guesses by player
   * phrases - array of phrases for the game
   * activePhrase - phrase object currently in play
   */
  constructor() {
    this.missed = 0;
    this.phrases = this.createPhrases();
    this.activePhrase = null;
  }

  /**
   * Create phrases for use in game
   * @return {array} a 5 element array of phrases for use in game
   */
  createPhrases() {
    return [
      "Know the Ropes",
      "Knuckle Down",
      "Rain on Your Parade",
      "Poke Fun At",
      "Short End of the Stick"
    ];

    // not sure if I have the skills for this, but it would be pretty cool to add a lot of phrases and then have an array of 5 randomly selected.
  }

  /**
   * Selects random phrase from phrases property
   * @return {Object} Phrase object chosen to be used
   */
  getRandomPhrase() {
    return new Phrase(this.phrases[Math.floor(Math.random() * 5)]);
  }

  /**
   * Begins game by selecting a random phrase and displaying it to the user
   */
  startGame() {
    // hide the start screen overlay
    document.querySelector("#overlay").style.display = "none";

    // call getRandomPhrase, display phrase, store in activePhrase
    const randPhrase = this.getRandomPhrase();
    randPhrase.addPhraseToDisplay();
    this.activePhrase = randPhrase;
  }

  /**
   * Checks for winning move
   * @return {Boolean} True if the game has been won, false otherwise
   */
  checkForWin() {
    return document.querySelectorAll(".hide.letter").length > 0 ? false : true;
  }

  /**
   * Increases the value of the missed property
   * Removes a life from the scoreboard
   * Checks if player has remaining lives and ends game if not
   */
  removeLife() {
    if (this.missed < 4) {
      this.missed += 1;

      const hearts = document.querySelectorAll(
        'li img[src="images/liveHeart.png"]'
      );

      hearts[0].setAttribute("src", "images/lostHeart.png");
    } else {
      this.gameOver(this.checkForWin());
    }
  }

  /**
   * Displays game over message
   * @param {Boolean} gameWon - Whether or not the user won the game
   */
  gameOver(gameWon) {
    const overlay = document.querySelector("#overlay");
    overlay.style.display = "inherit";
    if (gameWon) {
      overlay.className = "win";
      document.querySelector("#game-over-message").textContent =
        "Great job you won!";
    } else {
      overlay.className = "lose";
      document.querySelector("#game-over-message").textContent =
        "Better luck next time!";
    }
  }
}
