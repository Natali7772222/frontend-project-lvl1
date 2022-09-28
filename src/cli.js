import {
    question
} from "readline-sync";

import {
    gameResult
} from "../bin/brain-even.js"

function greetings() {

    console.log('Welcome to the Brain Games!');
    const name = question(`May I have your name? `)
    let newName = name[0].toUpperCase() + name.slice(1);
    console.log(`Hello, ${newName} !`);
    gameResult()
}
export {
    greetings
}