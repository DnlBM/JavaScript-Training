//Activating Strict Mode
'use strict';

/*Coding Challenge #1
Back to the two gymnastics teams, the Dolphins and the Koalas,
There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores
is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score
of the other team. Otherwise, no team wins.

1.Create an arrow function 'calcAverage' to calculate the
average of 3 scores.
2. Use the functions to calculate the average for both teams.
3. Create a function 'checkWinner' that takes the average
score of each team as parameters ('avgDolphins' and 'avgKoalas')
and then logs the winner to the console, together with the
victory points, according to the rule above. Example:
Koalas win (30 vs 13).
4.Use the checkWinner function to determine the winner
for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas
score 65, 54 and 49.

Test Data 2: Dolphins score 85, 54 and 41. Koalas
score 23, 34 and 27.
*/

//Arrow function to calculate the average of the 3 scores.
/*const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3

//Arrow function with a multiple Ternary expressions to calculate the winner.
const checkWinner = (avgScoreDolph, avgScoreKoal) => (avgScoreDolph >= (avgScoreKoal * 2)) ? console.log(`Dolphins won (${avgScoreDolph} vs ${avgScoreKoal})`) : (avgScoreKoal >= (avgScoreDolph * 2)) ? console.log(`Koalas won (${avgScoreKoal} vs ${avgScoreDolph})`) : console.log("Nobody Won.");

//Test Data 1.
console.log("--------------Test Data 1------------");

//Calculating the average score for dolphins and koalas.
let averageScoreDolphins = calcAverage(44, 23, 71);
let averageScoreKoalas = calcAverage(65, 54, 49);

//Logging the winner.
checkWinner(averageScoreDolphins, averageScoreKoalas);


//Test Data 2.
console.log("--------------Test Data 2------------");

//Calculating the average score for dolphins and koalas.
averageScoreDolphins = calcAverage(85, 54, 41);
averageScoreKoalas = calcAverage(23, 34, 27);

//Logging the winner.
checkWinner(averageScoreDolphins, averageScoreKoalas);*/

/*
//Exercise - Calculating birth year multiple years inside an array and saving the result
// in a second array.
function calcAge(birthYear) {
    return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

const answer = [];

var index = 0;

years.forEach(element => { answer.push(calcAge(element)) });

console.log(answer);
*/

//-----------------------------Coding Challenge #2---------------------------------------

/* Steven is  still building his tip calculator, using the same rules as before:
Tip 15% of the bill if the bill values is between 50 and 300, and if the values is different, the tip is 20%.

1.Write a function called 'calcTip' that takes any bill values as an input and returns the
corresponding tip, calculated based on the rules above. Use the function type you like the most.
Test the function using a bill value of 100.
2.Now lets use Arrays!, create an array 'bills' containing the test data below.
3.Create an array 'tips' containing the tip value for each bill, calculates from the function
you created before.
4.Bonus: Create an array 'total' contining the total values, so the bill + tip.

Test Data: 125, 555, 44;
*/

/*
//Creating tip calculating function.
function calcTip(bill) {
    if (bill >= 50 && bill <= 300) {
        return bill * 0.15
    } else {
        return bill * 0.20;
    }
}

//Creating array of bills.
const bills = [125, 555, 44];

//Creating array of tips to hold the tip value of the bills array.
const tips = [];

//Filling the tips array with the tip value from every bill.
bills.forEach(element => { tips.push(calcTip(element)) });

//Creating a calculateTotal function to sum the bills and tips arrays.
function calculateTotal(bills, tips) {
    const total = [];
    for (let index = 0; index < bills.length; index++) {
        total[index] = bills[index] + tips[index];
    }
    return total;
}

//Creating an array called total, to hold the value of the bill + tip.
const total = calculateTotal(bills, tips);

//Printing the results to the console.
console.log("---------------Bills Array-------------");
console.log(bills);

console.log("---------------Tips Array--------------");
console.log(tips);

console.log("---------------Total Array-------------");
console.log(total);

const jonas = {
    friends : ["Michael", "Alex", "Freddy"]
};

//Noob way of console logging.
console.log("Jonas has " + jonas.friends.length + " friends, and his best friend is called " + jonas.friends[0]);

//Pro way of onsole logging.
console.log(`Jonas has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);*/

/*
//-------------------Object Methods-------------------
const jonas = {
    firstName: "Jonas",
    lastName: "Schmedtmann",
    birthYear: 1991,
    job: "teacher",
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriverLicense: true,
    calcAge: function () { return 2021 - this.birthYear; },
};

console.log(jonas.calcAge());*/

//----------------------Coding Challenge #3--------------------

/*
Let's go back to Mark and Jogn comparing their BMIs! This time, let's use objects to implement the calculations.
Remember: BMI = mass / height**2 = mass / (height * height). Mass ins kg and height in meters.

1. For each of them, crete an object with properties for their full name, mass and height (Mark Miller and John Smith).

2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI
values to a property, and also return it from the method.

3.Log to the console who has the higher BMI, toghether with the full name and the respective BMI.
  Example: "John's BMI (28.3) is higher than Mark's (23.9)!"

Test Data: Marks weights 78kg and is 1.69m tall. John weights 92kg and is 1.95m tall.
*/

//Creating Mark's object.
const mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    weight: 78,
    height: 1.69,
    calcBMI: function () {
        this.BMI = this.weight / (this.height * this.height);
        return this.BMI;
    }
}

//Creating John's object.
const john = {
    firstName: 'John',
    lastName: 'Smith',
    weight: 92,
    height: 1.95,
    calcBMI: function () {
        this.BMI = this.weight / (this.height * this.height);
        return this.BMI;
    }
}

mark.calcBMI() < john.calcBMI() ? console.log(`${john.firstName}'s BMI (${john.BMI.toFixed(2)}) is higher than ${mark.firstName}'s (${mark.BMI.toFixed(2)})`)
    : console.log(`${mark.firstName}'s BMI (${mark.BMI.toFixed(2)}) is higher than ${john.firstName}'s (${john.BMI.toFixed(2)})`);
