
function Circle(radius) {
    this.radius = radius;
    this.draw = function draw() {
        console.log('Draw')
    };
};

const circle = new Circle(1)