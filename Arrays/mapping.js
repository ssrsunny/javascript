
const numbers = [1, -2, 2, -1, 3, 4];

let mappedToHtml = numbers.map(function(value) {
    return '<li>' + value + '</li>'; 
    
});

console.log(mappedToHtml);

const html = '<ul>\n' + mappedToHtml.join('\n   ') + '\n</ul>';


console.log(html);


const filteredToMapped = numbers
    .filter(number => number > 0)
    .map(number => '<li>' + number + '</li>');


console.log(filteredToMapped);

const mappedToObj = numbers.map(number => ({key: number})); 

console.log(mappedToObj);