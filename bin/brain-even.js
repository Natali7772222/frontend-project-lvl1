#!/usr/bin/env node

import runGame from "../src/games/even.js";
import {
    greetings
} from "../src/index.js";
greetings()
runGame()
// const addEven = () => {
//     console.log(`Answer "yes" if the number is even, otherwise answer "no".`)

//     let a = 0
//     const answerOnQuestion = () => {
//         if (a > 2) {
//             console.log(`Congratulations! ${newName}`)
//         } else {

//             let num = randomNum()
//             console.log(`: Question: ${num} `)
//             const answer = question('Your answer: ').toLowerCase()

//             if (num % 2 === 0 && answer === 'yes' || num % 2 !== 0 && answer === 'no') {
//                 console.log(`Correct! ${newName}`)
//                 a = a + 1;
//                 answerOnQuestion()

//             } else {
//                 console.log(`${newName}  This is not the correct answer!`)
//             }
//         }
//     }
//     answerOnQuestion()
// }





// let count = 1;
// const calc = () => {
//     let num1 = randomNum();
//     let num2 = +randomNum();
//     let res = num1 + num2;
//     if (count < 3) {
//         console.log(`\nWhat is the result of the expression?
//         ${num1} + ${num2}`)

//         const quest = question()

//         if (quest == res) {
//             console.log(`Correct!`)
//             count += 1
//             calc()
//         } else {
//             console.log(`${newName} is wrong answer ;(. Correct answer was ${res}.

//         Let's try again!

//         `)
//         }
//     } else {
//         console.log(`Congratulation! ${newName}`);
//     }
// }
// const gcd = () => {
//     if (count > 3) {
//         return console.log(`Congratulation! ${newName}`)
//     }
//     let num1 = randomNum();
//     let num2 = randomNum();
//     let res;
//     if (num1 > num2) {
//         res = num1
//     } else if (num2 > num1) {
//         res = num2
//     } else {
//         res = '='
//     }
//     console.log(`Find the greatest common divisor of given numbers.`)
//     console.log(`Question: ${num1}  ${num2}`);
//     let answer = question(`Your answer: `).toLowerCase()

//     if (res = answer) {
//         console.log(`Correct!`);
//         count++
//         gcd()
//     } else {
//         console.log(`${answer} is wrong answer ;(. Correct answer was.${res}`);
//     }
// }






// const progression = () => {
//     let arr = [];
//     let a = randomNum();
//     let num = 1;

//     for (let i = a; i <= a * 10; i = i + a) {
//         arr.push(i)

//     }
//     for (let i = 0; i < arr.length; i++) {
//         if (i === arr.length / 2) {
//             num = arr[i]
//             arr[i] = '..'
//         }

//     }
//     console.log(`What number is missing in the progression?`)
//     console.log(arr.join(' '));
//     let answer = question()
//     if (answer = num) {
//         console.log(`Correct!`)
//         progression()
//     } else {
//         console.log(` ${answer} is wrong answer ;(. Correct answer was ${num}.
//             Let's try again, Sam!`)
//     }
// }
// progression()


// export {
//     addEven,
//     calc,
//     gcd,
//     progression
// }