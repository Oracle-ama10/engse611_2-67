// Loop through arrays
const items = ['cloak', 'sword', 'wings', 'death number'];
const users = [{ name: 'Grim' }, { name: 'Mary sue' }, { name: 'Redhood' }];

// for (const item of items) {
//   console.log(item);
// }

for (const user of users) {
  console.log(user.name);
}

// Loop over strings
const str = 'JavaScript';

for (const letter of str) {
  console.log(letter);
}

// Loop over Maps
const map = new Map();
map.set('city', 'Wonderland');
map.set('country', 'Fairy tale');

for (const [key, value] of map) {
  console.log(key, value);
}