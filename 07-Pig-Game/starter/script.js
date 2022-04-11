'use strict';

//Setting necessary objects.
const btnNewGame = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const dice = document.querySelector('.dice');
const playerOne = document.querySelector('.player--0');
const playerOneScore = document.querySelector('#score--0');
const playerOneCurrentScore = document.querySelector('#current--0');
const playerTwo = document.querySelector('.player--1');
const playerTwoScore = document.querySelector('#score--1');
const playerTwoCurrentScore = document.querySelector('#current--1');

//Setting functions

//Function to get a randomDice name for the dice image.
const getRandomDiceNumber = function () {
    return Math.floor(Math.random() * 6 + 1);
}

//Function that sets a new game.
const newGame = function () {
    playerOneScore.textContent = 0;
    playerOneCurrentScore.textContent = 0;
    playerTwoScore.textContent = 0;
    playerTwoCurrentScore.textContent = 0;
    if (!playerOne.classList.contains('player--active')) {
        playerOne.classList.add('player--active');
        playerTwo.classList.remove('player--active');
    }
}

//Hold function
function hold() {
    playerOneScore.textContent = Number(playerOneScore.textContent) + Number(playerOneCurrentScore.textContent);
    playerOneCurrentScore.textContent = 0;
    playerTwoScore.textContent = Number(playerTwoScore.textContent) + Number(playerTwoCurrentScore.textContent);
    playerTwoCurrentScore.textContent = 0;
    if (playerOne.classList.contains('player--active')) {
        playerOne.classList.remove('player--active');
        playerTwo.classList.add('player--active');
    } else {
        playerTwo.classList.remove('player--active');
        playerOne.classList.add('player--active');
    }
}

//Function to roll the dice.
const rollDice = function () {
    //Generate and show dice roll
    let diceRoll = getRandomDiceNumber();
    dice.setAttribute('src', `dice-${diceRoll}.png`);

    //Check who's the active player
    if (playerOne.classList.contains('player--active')) {
        //Player one is active
        if (diceRoll == 1) {
            playerOneCurrentScore.textContent = 0;
            playerOne.classList.remove('player--active');
            playerTwo.classList.add('player--active');
        } else {
            playerOneCurrentScore.textContent = Number(playerOneCurrentScore.textContent) + diceRoll;
        }
    } else {
        //Player Two is active
        if (diceRoll == 1) {
            playerTwoCurrentScore.textContent = 0;
            playerTwo.classList.remove('player--active');
            playerOne.classList.add('player--active');
        } else {
            playerTwoCurrentScore.textContent = Number(playerTwoCurrentScore.textContent) + diceRoll;
        }

    }
}

//Implementing event handlers.
btnNewGame.addEventListener('click', newGame);
btnHold.addEventListener('click', hold);
btnRoll.addEventListener('click', rollDice);

