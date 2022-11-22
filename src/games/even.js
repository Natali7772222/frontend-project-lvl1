import {
    responseCheck,
    randomNum
} from "../index.js";


let correctAnswer = 'yes';
const runGame = () =>{
    console.log(`Answer "yes" if the number is even, otherwise answer "no".`)
    const num = randomNum()
    console.log(num)
    correctAnswer = 'yes'
    num % 2 === 0? correctAnswer : correctAnswer === 'no'; 
    responseCheck()

}



export {
    correctAnswer,
    runGame
}