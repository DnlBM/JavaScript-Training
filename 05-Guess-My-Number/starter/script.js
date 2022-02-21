'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'DOM Manipulation just like Ive been doing on AEM';

document.querySelector('.message').style.color = 'red';

*/

//VARIABLES------------------------------------------------------------------------

//Maximum value for the random number + 1.
const MAX_RANDOM = 100;

//Random Number that will be decided on page load.
let randomNum = 0;

//Guessed value entered by the user.
let guessedNum = 0;

//Highscore variable to keep track of the highest score.
let highScore = MAX_RANDOM;

//currentScore variable to keep track of the current score.
let currentScore = 0;

//FUNCTIONS------------------------------------------------------------------------

//The getRandomInt function returns a random number from 0 to maxInt-1
function getRandomInt(maxInt) {
    return Math.floor(Math.random() * maxInt);
}

//The giveHint function changes the text of the page to too high or too low depending on the
//guessed value entered by the user in relation to the randomNum.
function giveHint(randomNum, guessedNum) {
    if (guessedNum < randomNum) {
        document.querySelector('.message').textContent = 'too low....';
    } else if (guessedNum > randomNum) {
        document.querySelector('.message').textContent = 'too high!!!';
    }
}

//On page load function, defines the value that is to be stored on the random number.
document.addEventListener("DOMContentLoaded", function () {
    randomNum = getRandomInt(MAX_RANDOM);
    document.querySelector('.between').textContent = `Between 0 and ${MAX_RANDOM - 1}`;
});

//Cick event handler. Checks if the value selected by the user is equal to the random number.
//If it is, it changes the start guessing text to correct! and changes the "?" to the randomNum value.
//If it is not, it checks if the value is lower or higher.
//If it is higher, it changes the text to, too high...
//If it is lower, it changes the text to, too low....
document.querySelector('.check').addEventListener('click', function () {
    guessedNum = document.querySelector('.guess').value;
    //Correct guess!
    if (guessedNum == randomNum) {
        document.querySelector('.message').textContent = 'Correct!';
        document.querySelector('.number').textContent = randomNum;
        document.querySelector('body').style.backgroundColor = 'green';
        if (currentScore < highScore) {
            highScore = currentScore;
            document.querySelector('.highscore').textContent = highScore;
        }
    } else {
        giveHint(randomNum, guessedNum);
        currentScore++;
        document.querySelector('.score').textContent = currentScore;
    }
})

//Click event handler for playing again. Generates a new randomNum.
document.querySelector('.again').addEventListener('click', function () {
    randomNum = getRandomInt(MAX_RANDOM);
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = 'N/A';
    document.querySelector('body').style.backgroundColor = '#222';
    currentScore = 0;
})



