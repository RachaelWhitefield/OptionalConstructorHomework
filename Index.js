// contains the logic for the game
// randomly selects a word and uses the "Word" constructor to store it
// prompts the user for each guess and keeps track of the users remaining guesses

var inquirer = require(inquirer);
var Word = require("./Word.js");
var randomWords = require("./List.js");