import randomNumber from '../helper.js';
import run from '../index.js';

const description = 'What number is missing in the progression?';

const randomMinAndMax = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};
const getQuestionAndAnswer = () => {
  // случайное число
  const num = randomNumber();
  // массив случайной длины от 5 до 10
  const arr = Array(randomMinAndMax(6, 11)).fill(1);
  // изменненый массив
  const resArr = [];

  for (let i = 1; i < arr.length; i += 1) {
    resArr.push(i * num);
  }
  // случайный индекс
  const unknownNumber = randomMinAndMax(0, resArr.length - 1);
  let correctAnswer;

  for (let i = 0; i < resArr.length; i += 1) {
    if (i === unknownNumber) {
      correctAnswer = resArr[i];
      resArr[i] = '..';
    }
  }

  return [resArr.join(' '), correctAnswer];
};

export default () => {
  run(description, getQuestionAndAnswer);
};
