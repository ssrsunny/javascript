
const numbers = [1, 2, -1, 3, -4, -2, 4, 5, 6, 0];

let filteredNumbers = numbers.filter(function(number) {
    return number > 0; 
});

console.log(filteredNumbers);

filteredNumbers = numbers.filter(number => number > 0); 

console.log(filteredNumbers);