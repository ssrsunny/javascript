
// Syntax
function f(a, b, ...theArgs) {
    // ...
  }
  
  function sum(...args) {
    return args.reduce((a, b) => a + b); 
  }
  
  console.log(sum(1, 2, 3, 4, 5));
  
  function sumShoppingCart(discount, ...prices) {
    let total = prices.reduce((a, b) => a + b);
    return total * (1 - discount);
  }
  
  console.log(sumShoppingCart(0.1, 50, 30));