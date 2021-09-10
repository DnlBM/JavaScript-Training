//Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height*height) (Mass in kg, height in meters).

1. Store Mark's and John's mass and height in variables

2.Calculate both their BMIs using the formula.

3. Create a boolean variable 'markHigherBMI' containig information about wheter Mark has a higher BMI than John.

Test DATA 1: Mark weights 78kg and is 1.69 m tall. John weights 92 kg and is 1.95m tall.

Test DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
*/

/*console.log("----------Test DATA 1-----------");
//Defining variables and their values.
let markMass = 78;
let johnMass = 92;
let markHeight = 1.69;
let johnHeight = 1.95;
let markHigherBMI = false;

//Printing the values to the console.
console.log("Mark mass is: " + markMass);
console.log(`John Mass is: ${johnMass} [Wrote with Template Literals]`);
console.log("Mark height is: " + markHeight);
console.log("John height is: " + johnHeight);
console.log("Mark BMI is: " + calculateBMI(markMass, markHeight));
console.log("John BMI is: " + calculateBMI(johnMass, johnHeight));

//Comparing the BMI's of Mark and John to decide if Mark's BMI is higher or not.
if (calculateBMI(markMass, markHeight) > calculateBMI(johnMass, johnHeight)) {
    markHigherBMI = true;
}

//Printing the boolean determining if Mark's bmi is higher or not.
console.log("Mark's BMI is higher than John's? -" + markHigherBMI);

console.log("----------Test DATA 2-----------");
//Defining variables and their values.
markMass = 95;
johnMass = 85;
markHeight = 1.88;
johnHeight = 1.76;
markHigherBMI = false;

//Printing the values to the console.
console.log("Mark mass is: " + markMass);
console.log("John mass is: " + johnMass);
console.log("Mark height is: " + markHeight);
console.log("John height is: " + johnHeight);
console.log("Mark BMI is: " + calculateBMI(markMass, markHeight));
console.log("John BMI is: " + calculateBMI(johnMass, johnHeight));

//Comparing the BMI's of Mark and John to decide if Mark's BMI is higher or not.
if (calculateBMI(markMass, markHeight) > calculateBMI(johnMass, johnHeight)) {
    markHigherBMI = true;
}

//Printing the boolean determining if Mark's bmi is higher or not.
console.log(`Mark's BMI is higher than John's? 
-${markHigherBMI}`);
*/

//Function to calculate the Body Mass Index.
function calculateBMI(mass, height) {
    return mass / (height * height);
}

/**
 * Coding Challenge Numero Dos.
 *
 *Use the BMI example form Challenge #1 and the code you *already wrote, and improve it:
  1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's or "John's BMI is higher than Mark's!"

  2. Use a template string to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

  HINT: Use an if/else statement. :)
 *
 

console.log("----------Test DATA 1-----------");
//Defining variables and their values.
let markMass = 78;
let johnMass = 92;
let markHeight = 1.69;
let johnHeight = 1.95;
let markHigherBMI = false;
let message = "";

//Printing the values to the console.
console.log("Mark mass is: " + markMass);
console.log(`John Mass is: ${johnMass} [Wrote with Template Literals]`);
console.log("Mark height is: " + markHeight);
console.log("John height is: " + johnHeight);
console.log("Mark BMI is: " + calculateBMI(markMass, markHeight));
console.log("John BMI is: " + calculateBMI(johnMass, johnHeight));

//Comparing the BMI's of Mark and John to decide if Mark's BMI is higher or not.
if (calculateBMI(markMass, markHeight) > calculateBMI(johnMass, johnHeight)) {
    markHigherBMI = true;
    message = `Mark's BMI (${calculateBMI(markMass,markHeight)}) is higher than John's BMI (${calculateBMI(johnMass,johnHeight)})`;
} else{
    message = `John's BMI (${calculateBMI(johnMass,johnHeight)}) is higher than Mark's BMI (${calculateBMI(markMass,markHeight)})`;
}

//Printing the message of highest BMI to the user.
console.log(message);

console.log("----------Test DATA 2-----------");
//Defining variables and their values.
markMass = 95;
johnMass = 85;
markHeight = 1.88;
johnHeight = 1.76;
markHigherBMI = false;

//Printing the values to the console.
console.log("Mark mass is: " + markMass);
console.log("John mass is: " + johnMass);
console.log("Mark height is: " + markHeight);
console.log("John height is: " + johnHeight);
console.log("Mark BMI is: " + calculateBMI(markMass, markHeight));
console.log("John BMI is: " + calculateBMI(johnMass, johnHeight));

//Comparing the BMI's of Mark and John to decide if Mark's BMI is higher or not.
if (calculateBMI(markMass, markHeight) > calculateBMI(johnMass, johnHeight)) {
    markHigherBMI = true;
    message = `Mark's BMI (${calculateBMI(markMass,markHeight)}) is higher than John's BMI (${calculateBMI(johnMass,johnHeight)})`;
} else{
    message = `John's BMI (${calculateBMI(johnMass,johnHeight)}) is higher than Mark's BMI (${calculateBMI(markMass,markHeight)})`;
}

//Printing the message of the higherst BMI to the user.
console.log(message);

*/

/*Coding Challenge #3

1. Calculate the average socre for each team, usign 
the test data below

2. Compare the team's average scores to determine the 
winner of the competition, and print it to the
console. Don't forget that there can be a draw, so
test for that as well (draw means they have the same average score).

3.Bonus 1: Include a requirement for a minimum score of 100.
With this rule, a team only wins if it has a
higher score than the other team, and the same time a score of at
least 100 points. HINT: Use a logical operator to test for
minimum socre, as well as multiple else-if blocks.

4. Bonus 2: Minimum score also applies to a draw! So a draw only
happens when both teams have the same score and both have a score
greater or equal to 100 points. Otherwise, no team wins the trophy.

Test Data: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110.

Test Data Bonus 1: Dolphins 97, 112 and 101. Koalas 109, 95, 123.

Teste Data Bonus 2: Dolphins 97, 112, 101. Koalas 109, 95, 106.
*/

//Variables
let dolphinsAvgScore = 10;
let koalasAvgScore = 0;
let message = "";

//Function to calculate the average score.
function calculateAvgScore(score1, score2, score3) {
    return (score1 + score2 + score3) / 3;
}

//Function to compare and decide the winner of the competition.
function determineWinner(dolphinsAvgScore, koalasAvgScore) {
    if (dolphinsAvgScore > koalasAvgScore) {
        if (dolphinsAvgScore >= 100) {
            message = `The winner are the Dolphins!\nAverage Score: ${dolphinsAvgScore}`;
        } else {
            message = `The Dolphins have the highest score but failed to reach 100 points for the trophy.\nAverage Score: ${dolphinsAvgScore}`;
        }
    } else if (dolphinsAvgScore === koalasAvgScore) {
        if (dolphinsAvgScore >= 100) {
            message = `It's a tie!\nBoth teams win the trophy.`;
        } else {
            message = `It's a tie!\nBoth teams failed to reach enought points for the trophy. No winners.`;
        }

    } else {
        if (koalasAvgScore >= 100) {
            message = `The winner are the Koalas!\nAverage Score: ${koalasAvgScore}`;
        } else {
            message = `The highest score are the Koalas but failed to reach 100 points. No trophy.\nAverage Score: ${koalasAvgScore}`;
        }
    }
}

//Test Data 1
console.log("-----------Test Data 1-----------")
dolphinsAvgScore = calculateAvgScore(96, 108, 89);
koalasAvgScore = calculateAvgScore(88, 91, 110);

//Calculating the results
determineWinner(dolphinsAvgScore,koalasAvgScore);

//Displaying the results in the console.
console.log(message);

//Test Data 2
console.log("-----------Test Data 2-----------")
dolphinsAvgScore = calculateAvgScore(97, 112, 101);
koalasAvgScore = calculateAvgScore(109, 95, 123);

//Calculating the results
determineWinner(dolphinsAvgScore,koalasAvgScore);

//Displaying the results in the console.
console.log(message);

//Test Data 1
console.log("-----------Test Data 3-----------")
dolphinsAvgScore = calculateAvgScore(90, 90, 50);
koalasAvgScore = calculateAvgScore(90, 90, 50);

//Calculating the results
determineWinner(dolphinsAvgScore,koalasAvgScore);

//Displaying the results in the console.
console.log(message);

