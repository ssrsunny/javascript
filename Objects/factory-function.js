
// Create a new function
function createCircle () {
    const circle = {
        radius: 1,
        location: {
            x: 10,
            y: 20
        },
        isVisible: true,
        draw: function() {
            console.log('Draw')
        },
        move: function() {
            console.log('Move')
        }
    };
    return circle
}

// shorter code
function createsCircle (radius, x, y) {
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

const circle1 = createsCircle(1, 2, 3)
circle1.draw()