// variables
let variable = 'sunny bhai'
console.log(variable);

//constant
const interest = 10
console.log(interest);

/*
primitive types
String, Number, Boolean, undefined, null

reference types
objects, arrays, functions
*/

//objects
let person = {
    name: 'suny',
    age: 40,
    height: 1.90
}

person.name = 'sunnny'
console.log(person.name)
console.log(person['height'])

let selection = "age"
person[selection]
console.log(person[selection]);

// here the age of the person is modified
person[selection] = 45
console.log(person[selection]);

console.log(person);
console.log(typeof person);

// arrays
let colors = ['red', 'green', 'blue']
console.log(colors);
console.log(typeof colors);

// functions
function greet(){
    console.log('Hello world')
}
greet()

function greetPerson(fname, lname) {
    console.log('Hello ' + fname + ' ' + lname);
}
greetPerson('sunny','rithvik')
greetPerson('sunny')
greetPerson()

