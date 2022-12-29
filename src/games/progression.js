import randomMinAndMax from '../helper.js';
import run from '../index.js';

const description = 'What number is missing in the progression?';

const arr = Array(randomMinAndMax(6, 11)).fill(1);

const randomArr = () => {
  // изменненый массив
  const resArr = [];

  const num = randomMinAndMax(1, 100);

  for (let i = 1; i < arr.length; i += 1) {
    resArr.push(i * num);
  }

  return resArr;
};

const getQuestionAndAnswer = () => {
  const resArr = randomArr();

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
