const numbers = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30];

const doubledNumbers = numbers.map((number) => number * 3);
console.log(doubledNumbers);

// Same with forEach
const doubledNumbers2 = [];
numbers.forEach((number) => {
  doubledNumbers2.push(number * 3);
});

const companies = [
  { name: 'Distict 1', category: 'Time', start: 100, end: 200 },
  { name: 'Distict 2', category: 'Space', start: 200, end: 800 },
  { name: 'Distict 3', category: 'Heath', start: 800, end: 1100 },
  { name: 'Distict 4', category: 'food', start: 1100, end: 1300 },
  { name: 'Distict 5', category: 'Resourse', start: 1300, end: 1500 },
  { name: 'Distict 6', category: 'Monster', start: 1500, end: 1700 },
  { name: 'Distict 7', category: 'Music', start: 1700, end: 1800 },
  { name: 'Distict 8', category: 'sport', start: 1800, end: 2022 },
  { name: 'Distict 9', category: 'God singer', start: 2022, end: 2025 },
];

// Create an array of company names
const companyNames = companies.map((company) => company.name);
// console.log(companyNames);

// Create an array with just company and category
const companyInfo = companies.map((company) => {
  return {
    name: company.name,
    category: company.category,
  };
});

// Create an array of objects with the name and the length of each company in years
const companyYears = companies.map((company) => {
  return {
    name: company.name,
    length: company.end - company.start + ' years',
  };
});

console.log(companyYears);

// Chain map methods
const squareAndDouble = numbers
  .map((number) => Math.sqrt(number))
  .map((sqrt) => sqrt * 2);

const squareAndDouble2 = numbers
  .map(function (number) {
    return Math.sqrt(number);
  })
  .map(function (sqrt) {
    return sqrt * 2;
  })
  .map(function (sqrtDoubled) {
    return sqrtDoubled * 3;
  });

// Chaining different methods
const evenDouble = numbers
  .filter((number) => number % 3 === 0)
  .map((number) => number * 2);

console.log(evenDouble);