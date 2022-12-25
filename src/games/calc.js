/* eslint-disable default-case */
import run from '../index.js';
import random from '../helper.js';

const description = 'What is the result of the expression?';

const resOperation = (key, num1, num2) => {
  switch (key) {
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '+':
      return num1 + num2;
  }
};

const getQuestionAndAnswer = () => {
  const [randomNumber, randomMinAndMax] = random();
  const operation = ['*', '-', '+'];
  const randomOperation = operation[randomMinAndMax(-1, 3)];
  const num1 = randomNumber();
  const num2 = randomNumber();
  const question = `${num1} ${randomOperation} ${num2}`;
  const correctAnswer = resOperation(randomOperation, num1, num2);
  return [question, correctAnswer];
};

getQuestionAndAnswer();
export default () => {
  run(description, getQuestionAndAnswer);
};
