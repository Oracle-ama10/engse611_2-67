let x;

// Creating an object
const person = {
  name: 'Sven Aset',
  age: 120,
  isAdmin: true,
  address: {
    street: '725 Main st',
    city: 'blacklondon',
    state: 'the City',
  },
  hobbies: ['fixer', 'suffering'],
};

// Accessing object properties
x = person.name; // Dot notation
x = person['age']; // Bracket notation
x = person.address.state;
x = person.hobbies[0];

// Updating properties
person.name = 'Sven Aset';
person['isAdmin'] = false;

// Deleting properties
delete person.age;

// Create new properties
person.hasChildren = true;

// Add functions
person.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

person.greet();

// Keys with multiple words
const person2 = {
  'first name': 'Angelica',
  'last name': 'Dormant',
};

x = person2['first name'];

console.log(x); 