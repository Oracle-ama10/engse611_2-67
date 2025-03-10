
function greet() {
    console.log('Hello, Nice eye man');
  }
  

  greet();
  

  function multiply(a, b) {
    console.log(a * b);
  }
  

  multiply(6, 7);
  

  function divide(x, y) {
    if (y === 0) {
      return 'Cannot divide by zero';
    }
    return x / y;
  }
  

  const divisionResult = divide(29, 2);
  
  console.log(divisionResult, divide(15, 3));
  