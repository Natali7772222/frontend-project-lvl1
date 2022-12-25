const randomNumber = () => Math.ceil(Math.random() * 10);

const randomMinAndMax = (max, min) => Math.floor(Math.random() * (max - min + 1) + min);

export default () => [randomNumber, randomMinAndMax];
