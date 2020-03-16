/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase){
    this.phrase = phrase.toLowerCase();
  }

  /**
   * Display phrase on game board
   */
  addPhraseToDisplay(){
    const div = document.querySelector('#phrase');

    const ul = div.firstElementChild;
    
    function createLi(className, letter){
      const element = document.createElement('li');
      element.className = `hide ${className} ${letter}`.trim();
      element.textContent = letter;
      return element;
    }

    for (let i = 0; i < this.phrase.length; i++){
      if (this.phrase[i] === ' '){
        const li = createLi('space', ' ');
        ul.appendChild(li);
      } else {
        const li = createLi('letter', this.phrase[i]);
        ul.appendChild(li);
      }
    }

    div.appendChild(ul);
  }
}