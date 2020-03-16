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
  constructor(){
    this.missed = 0;
    this.phrases = [];
    this.activePhrase = null;
  }
}