import {
    question
} from "readline-sync";

import * as runGame from './games/calc.js'
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
    if (userAnswer == runGame.correctAnswer) {

        console.log(`Correct!`)
        count = count + 1;
        if (count > 3) {
            return console.log(`Congratulations, ${name}!`)

        }
        runGame()
    } else if (userAnswer !== runGame.correctAnswer) {
        console.log(`${userAnswer}, is wrong answer ;(. Correct answer was ${runGame.correctAnswer}.
                
                Let's try again!
                
                `)
    }
}


export {
    greetings,
    responseCheck,
    randomNum,
    name

}