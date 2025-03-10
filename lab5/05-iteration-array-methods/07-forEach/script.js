const Blacksouls = ['Grim', 'Redhood', 'Mary sue', 'The crawling one'];

// View prototype chain
console.log(Blacksouls.__proto__);

// Long form
Blacksouls.forEach(function (item) {
  console.log(item);
});

// Short form
Blacksouls.forEach((item) => console.log(item));

// We can also pass in the index and original array
Blacksouls.forEach((item, index, arr) => console.log(`${index} - ${item}`, arr));

// Using a named function
function logSocials(Blacksouls) {
  console.log(Blacksouls);
}

Blacksouls.forEach(logSocials);

// Array of objects
const socialObjs = [
  { name: 'Grim', url: 'https://black-souls.fandom.com/wiki/Grimm' },
  { name: 'Redhood', url: 'https://black-souls.fandom.com/wiki/Red_Hood' },
  { name: 'Mary sue', url: 'https://black-souls.fandom.com/wiki/Leaf' },
  { name: 'The crawling one', url: 'https://black-souls.fandom.com/wiki/Alice' },
];

socialObjs.forEach((item) => console.log(item.url));