import run from '../index.js'
import randomNumber from '../helper.js'

const description = `Find the greatest common divisor of given numbers.`

const euclid = (num1, num2)=>{
    const remainder = num1 % num2;
    if(remainder == 0){
        return num2;
   
    }else{
        num1 = num2;
        num2 = remainder;
       return euclid(num1, num2);
    }
}
const getQuestionAndAnswer = () => {
    let num1 = randomNumber()*3;
    let num2 = randomNumber()*5;
    const question = `${num1}  ${num2}`;
    const correctAnswer = euclid(num1,num2)
    return [question, correctAnswer]
}
// console.log(getQuestionAndAnswer())
export default () => {
    run(description, getQuestionAndAnswer)
}