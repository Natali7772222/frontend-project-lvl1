import run from '../index.js';
import randomNumber from '../helper.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => {
  const a = Math.abs(num1);
  const b = Math.abs(num2);
  return (b === 0) ? a : getGcd(b, a % b);
};

const getQuestionAndAnswer = () => {
  const num1 = randomNumber() * 3;
  const num2 = randomNumber() * 5;
  const question = `${num1} ${num2}`;
  const correctAnswer = getGcd(num1, num2);
  return [question, correctAnswer];
};
export default () => {
  run(description, getQuestionAndAnswer);
};
