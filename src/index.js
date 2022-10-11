import {
    question
} from "readline-sync";
import {
    correctAnswer,
    runGame
} from "./games/calc.js"
export let name;
const greetings = () => {
    console.log('Welcome to the Brain Games!');
    name = question(`May I have your name? `)
    console.log(`Hello, ${name} !`);

}

let count = 1;
const responseCheck = () => {
    
    const userAnswer = question()
    if (count >= 2) {
        console.log(`Congratulations, ${name}`)
    } else {

        if (userAnswer == correctAnswer) {

            console.log(`Correct!`)
            count = count + 1;
            runGame()
        } else if (userAnswer !== correctAnswer) {
            console.log(`${userAnswer}, is wrong answer ;(. Correct answer was ${correctAnswer}.
    
                Let's try again!
    
                `)

        }
    }
}


export {
    greetings,
    responseCheck

}