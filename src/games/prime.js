import run from '../index.js';
import random from '../helper.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const primeNumb = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};
const getQuestionAndAnswer = () => {
  const [randomNumber] = random();
  const question = randomNumber();
  const correctAnswer = primeNumb(question);
  return [question, correctAnswer];
};
export default () => {
  run(description, getQuestionAndAnswer);
};
