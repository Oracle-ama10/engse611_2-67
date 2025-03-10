const numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

const evenNumbers = numbers.filter(function (number) {
  return number % 2 === 0;
});

// Short version
const evenNumbers2 = numbers.filter((number) => number % 2 === 0);

// Same with forEach
const evenNumbers3 = [];
numbers.forEach((number) => {
  if (number % 2 === 0) {
    evenNumbers3.push(number);
  }
});

const companies = [
  { name: 'A corp', category: 'Time', start: 100, end: 200 },
  { name: 'B corp', category: 'Space', start: 200, end: 800 },
  { name: 'C corp', category: 'Heath', start: 800, end: 1100 },
  { name: 'D corp', category: 'food', start: 1100, end: 1300 },
  { name: 'E corp', category: 'Resourse', start: 1300, end: 1500 },
  { name: 'F corp', category: 'Monster', start: 1500, end: 1700 },
  { name: 'G corp', category: 'Music', start: 1700, end: 1800 },
  { name: 'H corp', category: 'sport', start: 1800, end: 2022 },
  { name: 'I corp', category: 'God singer', start: 2022, end: 2025 },
];

// Get only retail companies
const retailCompanies = companies.filter(
  (company) => company.category === 'Retail'
);

// Get companies that started in or after 1990 and ended in or before 2010
const earlyCompanies = companies.filter(
  (company) => company.start >= 1990 && company.end <= 2010
);

// Get companies that lasted 15 years or more
const longCompanies = companies.filter(
  (company) => company.end - company.start >= 15
);

console.log(longCompanies);