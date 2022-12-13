import {
    responseCheck,
    randomNum
} from "../index.js";


// let correctAnswer;
const runGame = () =>{
    console.log(`Answer "yes" if the number is even, otherwise answer "no".`)
    const num = randomNum()
    console.log(num)
    let correctAnswer;
    num % 2 === 0 ? correctAnswer = 'yes' : correctAnswer = 'no'; 
   
    responseCheck()

}
export default runGame 
// runGame()

// export {
//     correctAnswer,
//     runGame
// }