'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'DOM Manipulation just like Ive been doing on AEM';

document.querySelector('.message').style.color = 'red';

*/

//Random Number that will be decided on page load.
let randomNum = 0;


//The function returns a random number from 0 to maxInt-1
function getRandomInt(maxInt) {
    return Math.floor(Math.random() * maxInt);
}

//On page load function, defines the value that is to be stored on the random number.
document.addEventListener("DOMContentLoaded", function () {
    randomNum = getRandomInt(21);
});

//Cick event handler. Checks if the value selected by the user is equal to the random number.
//If it is, 
document.querySelector('.check').addEventListener('click', function () {
    console.log(document.querySelector('.guess').value);
    console.log(randomNum);
})

