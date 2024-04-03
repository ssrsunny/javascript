const dateNow = new Date(); // Using the date without any parameters returns the current date.
console.log(dateNow);

const date1 = new Date('September 15 2024')
console.log(date1);

let date2 = new Date(2020, 0, 11, 8, 0); // Month is 0 based indexed
console.log(date2)

console.log(dateNow.getDate()); // Get the day of the month.

console.log(dateNow.setFullYear(2029)); // to set to a different date.

console.log(dateNow.toDateString()); // Converts date object to string.

console.log(dateNow.toTimeString()); // Return the time component of the date object.

console.log(dateNow.toISOString()); // Converts to a standard ISO format 