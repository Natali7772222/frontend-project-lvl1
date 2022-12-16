import randomNumber from '../helper.js'
import run from '../index.js';
const description = `What number is missing in the progression?`

const randomMinAndMax = (min, max) => {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
const getQuestionAndAnswer = () => {
    //случайное число
    let num = randomNumber()
    //массив случайной длины от 5 до 10
    let arr = Array(randomMinAndMax(5, 10)).fill(1)
    //изменненый массив 
    let resArr = []
    for (let i = 1; i < arr.length; i++) {
        resArr.push(i * num)
    }
    //случайный индекс
    let unknownNumber = randomMinAndMax(0,resArr.length-1)
    let correctAnswer;

    for (let i = 0; i < resArr.length; i++) {
        if (i === unknownNumber) {
            correctAnswer = resArr[i]
            resArr[i] = '..'
        }

    }
    return [resArr, correctAnswer]
}

export default () => {
    run(description, getQuestionAndAnswer)
}