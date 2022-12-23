import run from '../index.js';
import randomNumber from '../helper.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

function isEvenNumber(num) {
  if (num % 2 === 0) {
    return true;
  }
  return false;
}

function getQuestionAndAnswer() {
  const question = randomNumber(0, 100);
  const correctAnswer = isEvenNumber(question) ? 'yes' : 'no';

  return [question, correctAnswer];
}

export default () => {
  run(description, getQuestionAndAnswer);
};
