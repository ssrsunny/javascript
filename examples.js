//
function max1(number1, number2) {
    return (number1 > number2) ? number1 : number2;
}

console.log(max1(4, 9))

//
function isLandscape(width, height) {
    return width > height 
}

console.log(isLandscape(800, 600))

//
function fizzBuzz(input) {
    if (typeof input !== 'number') return NaN;
    else if ((input % 3 === 0) && (input % 5 === 0)) return 'FizzBuzz';
    else if (input % 3 === 0) return 'Fizz';
    else if (input % 5 === 0) return 'Buzz';
    else return input;
}

let result1 = fizzBuzz('a')
console.log(result1)

//
function checkSpeed(speed) {
    let points;
    if (speed < 75) return "Ok";
    else if (speed >= 75 && speed < 180) {
        points = (speed - 70) / 5;
        return points;
    }
    return "License suspended";
}

let result2 = checkSpeed(130)
console.log(result2)

//
function showNumbers(limit) {
    for (i = 0; i <= limit; i++) {
        const message = (i % 2 === 0) ? "EVEN" : "ODD"
        console.log(i, message)
    }
}

console.log(showNumbers(17));

//
function countTruthy(array) {
    let count = 0
    for (let value of array) {
        if (value)
            count++;
    }
    return count
}

const myArray = [1, 2, 0, 3, undefined, null, 5, 7, 'a', 'fsf']
const result3 = countTruthy(myArray)
console.log(result3)