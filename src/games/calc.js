import {
    responseCheck,
    randomNum
} from "../index.js";
import runGame from "./even.js";



let correctAnswer;
export default () => {
    let num1 = randomNum();
    let num2 = randomNum();
    correctAnswer = num1 + num2;
    console.log(`\nWhat is the result of the expression? ${num1} + ${num2}`)
    responseCheck()
}

export{
    correctAnswer
}