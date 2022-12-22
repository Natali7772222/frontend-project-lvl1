import run from "../index.js";
import randomNumber from "../helper.js";

const description = `Answer "yes" if given number is prime. Otherwise answer "no".`

const primeNumb = (num) => {

    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            return "no";
        }
    }
    return "yes";

}
const getQuestionAndAnswer = () => {
    const question = randomNumber()
    const correctAnswer = primeNumb(question)
    return [question, correctAnswer]
}
export default () => {
    run(description, getQuestionAndAnswer);
};