import run from '../index.js';
import randomMinAndMax from '../helper.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrimeNumb = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
const getQuestionAndAnswer = () => {
  const question = randomMinAndMax(-100, 100);
  const correctAnswer = isPrimeNumb(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};
export default () => {
  run(description, getQuestionAndAnswer);
};
