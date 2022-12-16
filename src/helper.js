export default () => {
    return Math.ceil(Math.random() * 10);
}
export const randomMinAndMax = (min = 5, max = 10) => {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}