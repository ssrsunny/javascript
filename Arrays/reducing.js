
const numbers = [1, 2, 3, 4, 5, 6];

let sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log(sum);
