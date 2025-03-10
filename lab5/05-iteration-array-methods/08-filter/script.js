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
  { name: 'Company Alpha', category: 'Healthcare', start: 1995, end: 2020 },
  { name: 'Company Beta', category: 'Education', start: 2000, end: 2018 },
  { name: 'Company Gamma', category: 'Technology', start: 2010, end: 2022 },
  { name: 'Company Delta', category: 'Retail', start: 1985, end: 2005 },
  { name: 'Company Epsilon', category: 'Finance', start: 1990, end: 2010 },
  { name: 'Company Zeta', category: 'Healthcare', start: 2005, end: 2021 },
  { name: 'Company Eta', category: 'Retail', start: 1998, end: 2015 },
  { name: 'Company Theta', category: 'Auto', start: 1980, end: 1995 },
  { name: 'Company Iota', category: 'Technology', start: 2015, end: 2025 },
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