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
    this.activePhrase = this.getRandomPhrase();
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
}
