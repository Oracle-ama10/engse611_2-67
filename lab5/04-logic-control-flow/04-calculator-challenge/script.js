function calculator(num1, num2, operator) {
    switch (operator) {
      case '+': return num1 + num2;
      case '-': return num1 - num2;
      case '*': return num1 * num2;
      case '/': return num2 !== 0 ? num1 / num2 : 'Error: Division by zero';
      default: return 'Error: Invalid operator';
    }
  }
  
  console.log(calculator(5, 2, '+')); 
  console.log(calculator(5, 2, '-')); 
  console.log(calculator(5, 2, '*')); 
  console.log(calculator(5, 2, '/')); 
  console.log(calculator(5, 2, '&')); 
  console.log(calculator(5, 0, '/'));
  