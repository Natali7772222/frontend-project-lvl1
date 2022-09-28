import {
    question
} from "readline-sync";
import {
    greetings
} from '../src/cli.js';
//greetings()
const gameResult = () => {
    console.log(`Answer "yes" if the number is even, otherwise answer "no".`)

    let count = 0;
    const answerOnQuestion = () => {
        count++;
        console.log(count)
        if (count > 3) {
            return console.log(`Congratulations, ${newName}!`)

        };
        const randomNum = Math.ceil(Math.random() * 1000)
        console.log(`Question: ${randomNum} `)
        const quest = question('Your answer: ').toLowerCase()
        if (randomNum % 2 === 0 && quest === 'yes' || randomNum % 2 !== 0 && quest === 'no') {
            console.log(`Correct!${newName}`)
            answerOnQuestion()
        } else {
            console.log(`This is not the correct answer ${newName}!`)
        }
    }
    answerOnQuestion()

}
export {
    gameResult
}












// import {
//     question
//   } from "readline-sync";
//   const greetings = () => {
//     console.log(`Welcome to the Brain Games!`);
//     const name = question(`May I have your name? `)
//     let newName = name[0].toUpperCase() + name.slice(1);
//     console.log(`Hello, ${newName} !`);
//     console.log(`Answer "yes" if the number is even, otherwise answer "no".`)

//     let count = 0;
//     const answerOnQuestion = () => {
//       count++;
//       console.log(count)
//       if (count > 3) {
//       return console.log(`Congratulations, ${newName}!`)

//       };
//       const randomNum = Math.ceil(Math.random() * 1000)
//       console.log(`Question: ${randomNum} `)
//       const quest = question('Your answer: ').toLowerCase()
//       if (randomNum % 2 === 0 && quest === 'yes' || randomNum % 2 !== 0 && quest === 'no') {
//         console.log(`Correct!${newName}`)
//         answerOnQuestion()
//       } else {
//         console.log(`This is not the correct answer ${newName}!`)
//       }
//     }
//     answerOnQuestion()




//   }

//   export {
//     greetings
//   };