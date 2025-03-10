// Falsy Values:
// - false
// - 0
// - "" or '' (Empty string)
// - null
// - undefined
// - NaN

// Truthy Values:
// - Everything else that is not falsy
// - true
// - '0' (0 in a string)
// - ' ' (space in a string)
// - 'false' (false in a string)
// - [] (empty array)
// - {} (empty object)
// - function () {} (empty function)

const value = [];

if (value) {
  console.log('This is truthy');
} else {
  console.log('This is falsy');
}

console.log(`Boolean(value): ${Boolean(value)}`);

const numOfPets = 2;

if (numOfPets) {
  console.log(`You have ${numOfPets} pets`);
} else {
  console.log('Please enter the number of pets');
}

if (!isNaN(numOfPets)) {
  console.log(`You have ${numOfPets} pets`);
} else {
  console.log('Please enter a valid number');
}

const comments = [];

if (comments.length > 0) {
  console.log('Displaying comments...');
} else {
  console.log('No comments found');
}

const account = {};

if (Object.keys(account).length > 0) {
  console.log('Account details loaded');
} else {
  console.log('No account details found');
}

console.log(false == 0); 
console.log('' == 0); 
console.log(null == undefined); 

console.log(false === 0); 
console.log('' === 0); 
console.log(null === undefined); 