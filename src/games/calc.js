import {
    greetings,
    responseCheck
} from "../index.js";

greetings()
const randomNum = () => {
    return Math.ceil(Math.random() * 10);
}
export let correctAnswer;
export const runGame = () => {
    let num1 = randomNum();
    let num2 = randomNum();
    correctAnswer = num1 + num2;

    console.log(`\nWhat is the result of the expression? ${num1} + ${num2}`)
    responseCheck()

}