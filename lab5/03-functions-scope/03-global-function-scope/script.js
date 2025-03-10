const num = 42;

console.log(num, 'in global scope');

function displayInfo() {
  console.log(window.navigator.language);
  console.log(num, 'inside function');
}

displayInfo();

if (true) {
  console.log(num, 'inside block');
}

// Define `multiplier` globally
const multiplier = 5;

function calculate() {
  const num = 10;
  console.log(num * multiplier);
}

console.log(multiplier); // Now it works because it's defined globally
calculate();