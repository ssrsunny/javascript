const circle = {
    radius: 1,
}

circle.color = 'yellow'; 
circle.draw = function() { 
    console.log('Draw')
};

console.log(circle);

delete circle.color; 

console.log(circle);