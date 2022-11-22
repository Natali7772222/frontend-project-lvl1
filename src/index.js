import {
    question
} from "readline-sync";

import { runGame, correctAnswer } from
    "./games/calc.js"
"./games/even.js"

let name;

const greetings = () => {
    console.log('Welcome to the Brain Games!');
    name = question(`May I have your name? `)
    console.log(`Hello, ${name} !`);

}
const randomNum = () => {
    return Math.ceil(Math.random() * 10);
}
let count = 1;
const responseCheck = () => {

    const userAnswer = question()
    if (count >= 3) {
        console.log(`Congratulations, ${name}!`)
    } else {

        if (userAnswer == correctAnswer) {

            console.log(`Correct!`)
            count = count + 1;
            runGame()
        } else if (userAnswer != correctAnswer) {
            console.log(`${userAnswer}, is wrong answer ;(. Correct answer was ${correctAnswer}.
    
                Let's try again!
    
                `)

        }
    }
}


export {
    greetings,
    responseCheck,
    randomNum,
    name

}