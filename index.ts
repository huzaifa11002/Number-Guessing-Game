#! /usr/bin/env node

// Number Guessing Game

import inquirer from "inquirer";

const RandomGuess = Math.floor(Math.random() * 10 + 1);
const guessNumber = await inquirer.prompt([

{
    name: "guess",
    type: "number",
    message: "Type your guess number (Between 1 to 10)",
}
])

if(RandomGuess === guessNumber.guess)
{
    console.log("You Win!")
}
else{
    console.log("You Lose, Better Luck Next Time")
    console.log(`Your Guess number is ${guessNumber.guess} and Answer is ${RandomGuess}`)
}
