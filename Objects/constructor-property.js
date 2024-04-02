function createCircle (radius, x, y) {
    return {
        radius,
        location: {
            x,
            y
        },
        draw() {
            console.log('Draw')
        },
        move() {
            console.log('Move')
        },
    };
}


const circleFactory = createCircle(1, 2, 3);
console.log(circleFactory.constructor);
// [Function: Object] 


// Constructor Function
function Circle(radius) {
    this.radius = radius;
    this.draw = function draw() {
        console.log('Draw')
    }
}

const circleConstructor = new Circle(1);
console.log(circleConstructor.constructor);
// [Function: Circle] 