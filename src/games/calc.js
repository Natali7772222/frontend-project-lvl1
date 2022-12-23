import run from '../index.js';
import randomNumber from '../helper.js';

const description = 'What is the result of the expression?';

const getQuestionAndAnswer = () => {
  const num1 = randomNumber();
  const num2 = randomNumber();
  const question = `${num1} + ${num2}`;
  const correctAnswer = num1 + num2;
  return [question, correctAnswer];
};

export default () => {
  run(description, getQuestionAndAnswer);
};
