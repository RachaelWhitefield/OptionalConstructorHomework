// Contains a constructor, Letter.  Should be able to either display an underlying character or a blank placeholder
// the constructor should define: a string value for the letter
// a boolean value that stores whether a letter has been guessed yet
// a function that returnes the underlying character if the letter has been guessed or a placeholder if the letter has not been guessed
// a function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly


var inquirer = require("inquirer");

function Letter(letter) {
    this.letter = letter;
    this.guessed = false;
    this.display = function() {
        if(this.guessed === false) {
            return "_";
        } else {
            return this.letter;
        }
    }
    this.check = function(value) {
        if(value === this.letter) {
            this.guessed = true;
            return true;
        }
    }
}

module.exports = Letter;
