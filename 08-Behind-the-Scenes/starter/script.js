'use strict';

function calcAge(birthYear) {
    const age = 2037 - birthYear;

    const printAge = function () {
        const output = `You are ${age}, born in ${birthYear}`;
        console.log(output);
    }

    if (birthYear >= 1981 && birthYear <= 1996) {
        var millenial = true;
        const str = `Oh, and you're a millenial, ${firstName}`;
        console.log(str);
    }
    console.log(millenial);
    //console.log(str); Will generate an error.
    printAge();
    return age;
}

const firstName = 'Jonas';
calcAge(1991);