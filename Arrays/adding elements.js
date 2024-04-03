
const numbers = [3, 4];
console.log(numbers);

// Adding elements to the end.
numbers.push(5, 6);
console.log(numbers);

// Adding elements to beginning.
numbers.unshift(1, 2);
console.log(numbers);


numbers.splice(2, 0, 'a', 'b', 'c');
// The first parameter (type number) is the starting position (index).
// The second parameter (type number) is a delete count. How many we want to delete.
// The third parameters are the items we want to add.
console.log(numbers);


const number = [1, 2, 3, 4, 1, 6, 2];

console.log(number.indexOf(1));
console.log(number.indexOf('a'));

console.log(number.lastIndexOf(1));


// To verify if a given elements exist in an array
console.log(number.indexOf(1) !== -1); // This expression will return true or false. Depending if the element exist in the array.

// This a new better method to achieve the same thing.
console.log(number.includes(1));
console.log(number.includes('a'));