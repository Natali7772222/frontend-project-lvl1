import run from "../index.js";
import randomNumber from "../helper.js";

const description =`Answer "yes" if the number is even, otherwise answer "no".`

const isEvenNumber = (num) => {
    return (num % 2 == 0) ? true : false
}
const getQuestionAndAnswer = () => {
    const question = randomNumber(0, 100);
    const correctAnswer = isEvenNumber(question) ? 'yes' : 'no';

    return [question, correctAnswer];
};

export default () => {
    run(description, getQuestionAndAnswer);
};
