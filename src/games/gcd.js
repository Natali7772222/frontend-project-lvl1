import run from '../index.js';
import randomMinAndMax from '../helper.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => {
  const a = Math.abs(num1);
  const b = Math.abs(num2);
  return (b === 0) ? a : getGcd(b, a % b);
};

const isgetQuestionAndAnswer = () => {
  const num1 = randomMinAndMax(0, 100);
  const num2 = randomMinAndMax(0, 100);
  const question = `${num1} ${num2}`;
  const correctAnswer = getGcd(num1, num2);
  return [question, correctAnswer];
};
export default () => {
  run(description, isgetQuestionAndAnswer);
};
