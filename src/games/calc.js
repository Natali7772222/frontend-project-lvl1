/* eslint-disable default-case */
import run from '../index.js';
import randomMinAndMax from '../helper.js';

const description = 'What is the result of the expression?';

const operation = ['*', '-', '+'];

const calculate = (key, num1, num2) => {
  switch (key) {
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '+':
      return num1 + num2;
  }
  return 'error';
};

const getQuestionAndAnswer = () => {
  const randomOperation = operation[randomMinAndMax(0, operation.length - 1)];
  const num1 = randomMinAndMax(0, 10);
  const num2 = randomMinAndMax(0, 10);
  const question = `${num1} ${randomOperation} ${num2}`;
  const correctAnswer = calculate(randomOperation, num1, num2);
  return [question, correctAnswer];
};

export default () => {
  run(description, getQuestionAndAnswer);
};
