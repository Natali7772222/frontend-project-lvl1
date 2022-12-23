import {
  question,
} from 'readline-sync';

function greetings() {
  console.log('Welcome to the Brain Games!');
  const name = question('May I have your name? ');
  const newName = name[0].toUpperCase() + name.slice(1);
  console.log(`Hello, ${newName} !`);
}
export default greetings();
