
function startMe() {
// option of letters to choose from.
var letterOptions = ["a", "s", "d", "f"];

var computerGuess = letterOptions[Math.floor(Math.random() * letterOptions.length)];
console.log(computerGuess);


var numberofWins = 0;
var numberofLosses = 0;
var numberofGuessesLeft = 9;
var numberofGuessesoFar = [];

//computer randomly chooses a letter
var rand = letterOptions[Math.floor(Math.random() * letterOptions.length)];

//user input would either match or not match computer letter

//computer recognizes letter as correct(win) or wront(loose)

//if wrong, computer shows how many guesses are left and decrease amount of guesses left

}
//user guesses a letter
document.onkeydown = function(event){console.log(event.key)};

startMe()