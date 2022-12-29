import run from '../index.js';
import randomMinAndMax from '../helper.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

function isEvenNumber(number) {
  if (number % 2 === 0) {
    return true;
  }
  return false;
}

function getQuestionAndAnswer() {
  const question = randomMinAndMax(1, 100);
  const correctAnswer = isEvenNumber(question) ? 'yes' : 'no';

  return [question, correctAnswer];
}

export default () => {
  run(description, getQuestionAndAnswer);
};
