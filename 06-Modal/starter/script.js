'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClose = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

//Removes modal and overlay
function closeModal() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

//Adds modal and overlay
const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

//To loop through properties is -> for (variable in object).
//In this case to loop through elements is for (element of NodeList)
for (let node of btnsOpenModal) {
    node.addEventListener('click', openModal);
}

btnClose.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);
