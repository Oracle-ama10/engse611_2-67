const numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

// Add all numbers together
const sum = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

const sum2 = numbers.reduce((acc, cur) => acc + cur, 0);

// Using a for loop
const sum3 = () => {
  let acc = 0;
  for (const cur of numbers) {
    acc += cur;
  }
  return acc;
};

// Shopping cart example (objects)
const cart = [
  { id: 1, name: 'Durandal', price: 12644 },
  { id: 2, name: 'Mook workshop', price: 1255 },
  { id: 3, name: 'Arthery logic', price: 1455 },
  { id: 4, name: 'Mimicry', price: 24551 },
];

const total = cart.reduce(function (acc, product) {
  return acc + product.price;
}, 0);

console.log(total);