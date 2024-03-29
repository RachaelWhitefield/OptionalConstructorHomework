// contains the logic for the game
// randomly selects a word and uses the "Word" constructor to store it
// prompts the user for each guess and keeps track of the users remaining guesses
// SHOULD I LET THE USER KNOW THIS IS CHESS THEMED???

var inquirer = require(inquirer);
var Word = require("./Word.js");
var randomWords = require("./List.js");

var question = [{
    type: "input",
    name: "guessedLetter",
    message: "Guess a letter!",
    validate: function(input) {
        if((input.length === 1) && !(Number(input))) {
            return true;
        } else {
            console.log(`/n`)
            return false;
        }
    }
}]

// Array to store guessed letters
var guessedLetters = [];
var word = randomWord();
var guesses = 6;
function guessLetter() {
    inquirer.prompt(question).then(function(response) {
        if (guessedLetters.includes(response.guessedLetter)) {
            console.log("----------------")
            console.log(`You already guessed ${response.guessedLetter}!`);
            console.log("---------------")
            console.log(word.wordDisplay().join(" "));
            console.log(`You have ${guesses} guesses remaining.\n`);
            guessLetter();
        } else {
            guessedLetters.push(response.guessedLetter);
            var guess = response.guessedLetter;
            var found = word.guess(guess);
            var output = word.wordDisplay();
            console.log(output.join(" "));
            if(!found) {
                guesses --
            }
            if ((guesses === 0) && (output.includes("_"))) {
                console.log("---------------");
                console.log("You Lose!");
                console.log(`The answer was: ${stringWord}`);
                console.log("---------------");
                playAgain()
            } else if (output.includes("_")) {
                console.log(`You have ${guesses} guesses remaining.\n`);
                guessLetter();
            } else {
                console.log("---------------");
                console.log("You win!");
                console.log("---------------");
                playAgain();
            }
            }
        
    })
}

console.log(`Lets Play Constructor Wordguess!`);
console.log(word.wordDisplay().join(" "));
console.log(`You have ${guesses} guesses reamining.\n`);

function randomWord() {
    var indexOfWord = Math.floor(Math.random() * randomWords.length);
    return new Word(randomWords[indexOfWord])
}
function playAgain() {
    inquirer.prompt([{
        type: "confirm",
        name: "gameStatus",
        message: "Play again?"
    }]).then(function(response){
        if(response.gameStatus === true) {
            word = randomWord();
            guesses = 6;
            guessedLetters = [];
            console.log(word.wordDisplay().join(" "));
            console.log(`You have ${guesses} guesses reamining.\n`);
            guessLetter();
        } else {
            console.log("---------------");
            console.log("Thanks for playing!");
            console.log("--------------");
        }
    })}
