import {
    question
} from "readline-sync";
export let newName;
const greetings = () => {
    console.log('Welcome to the Brain Games!');
    const name = question(`May I have your name? `)
    newName = name[0].toUpperCase() + name.slice(1);
    console.log(`Hello, ${newName} !`);

}

export {
    greetings

}
