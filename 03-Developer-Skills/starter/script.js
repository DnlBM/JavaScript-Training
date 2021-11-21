// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const x = '23';

console.log("Hello");
console.log("Live Server is working pretty nicely");

//Test Problem
//We work for a company buiolding a smart house thermometer. Our most recent task is this: "Given an arrray of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const temperatures2 = [-10, 100];

// 1) Understanding the problem
//What is temperature amplitude? -> Difference between the highest and lowest temperatures.
// How to compute the max and min temperatures?
//what does a sensor error look like?


//2) Breaking up into sub-problems.
// -How to ignote errors?
// -Fin max value in temp array
// -Find min value in temp array
// -Substrac min from max (amplitude) and return it.

//Function calculates the maximum temperature.
function calcMaxTemperature(temps) {
    let max = temps[0];
    temps.forEach(temp => {
        typeof temp != 'number' ? temp = max : null;
        if (temp > max) {
            max = temp;
        }
    });
    return max;
}

//Function calculates the min temperature.
function calcMinTemperature(temps) {
    let min = temps[0];
    temps.forEach(temp => {
        typeof temp != 'number' ? temp = min : null;
        if (temp < min) {
            min = temp;
        }
    });
    return min;
}

//Function returns the amplitude.
function calcTempAmplitude(temps) {
    let min = calcMinTemperature(temps);
    let max = calcMaxTemperature(temps);
    return max - min;
}

//Console loging the Temperature Amplitude
console.log(`Temp Amplitude: ${calcTempAmplitude(temperatures)}`);


//Problem #2 Calculate now if the function receives 2 arrays of temperatures.

//Function returns the amplitude.
function calcTempAmplitude2(temps, temps2) {
    let tempsAll = temps.concat(temps2);
    let min = calcMinTemperature(tempsAll);
    let max = calcMaxTemperature(tempsAll);
    return max - min;
}

//Console loging the Temperature Amplitude with 2 arrays.
console.log(`Temp Amplitude: ${calcTempAmplitude2(temperatures, temperatures2)}`);
