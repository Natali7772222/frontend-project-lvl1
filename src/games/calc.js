import {
    // greetings,
    responseCheck,
    randomNum
} from "../index.js";


// greetings()

let correctAnswer;
const runGame = () => {
    let num1 = randomNum();
    let num2 = randomNum();
    correctAnswer = num1 + num2;
    console.log(`\nWhat is the result of the expression? ${num1} + ${num2}`)
    responseCheck()


}

export {
    correctAnswer,
    runGame
}