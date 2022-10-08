#!/usr/bin/env node

import {
    question
} from "readline-sync";

import {
    greetings,
    newName

} from '../src/index.js';

greetings()
const randomNum = () => {
    return Math.ceil(Math.random() * 10);
}
const count = 0;

const calc = () => {
    let num1 = randomNum();
    let num2 = randomNum();
    let res = num1 + num2;
    if (count < 3) {
        console.log(`\nWhat is the result of the expression?
        ${num1} + ${num2}`)

        const quest = question()

        if (quest == res) {
            console.log(`Correct!`)
            // count = count + 1;
            calc()
        } else {
            console.log(`${newName}, is wrong answer ;(. Correct answer was ${res}.

            Let's try again!

            `)
        }
    } else {
        console.log(`Congratulation! ${newName}`);
    }
}
calc()