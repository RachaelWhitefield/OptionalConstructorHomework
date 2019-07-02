// contains a constructor, Word - that depends on the Letter constructor
// represents the current word the user is attempting to guess
// needs an Array of "new" Letter objects 
// a function that returns a string representing the word
// a function that takes a character as an argument and calls the guess function on each letter object

var letter = require("./Letter.js");

function Word(word) {
    var splitword = word.split("");
    var wordArray = [];
    splitword.forEach(function(element){
        var letter = new letter(element);
        wordArray.push(letter);
    })
    this.stringWord = word;
    this.word = wordArray;
    this.wordDisplay = function() {
        var display = [];
        this.word.forEach(function(element){
            display.push(element.display());
        })
        return display;
    }
    this.guess = function(letter) {
        var found = false;
        this.word.forEach(function(element) {
            if(element.check(letter)) {
                found = true;
            }
        })
        return found;
    }
}

module.exports = Word;