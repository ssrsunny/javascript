
// Function declaration
function walk() {
    console.log("walk");
  }
  
  // Anonymous Function Expression
  let run = function () {
    console.log("run");
  };
  
  // Named Function Expression
  const jump = function jump() {
    console.log("jump");
  };
  
  walk();
  run();
  jump();
  
  // We can referent a function expression
  const move = run;
  
  move();