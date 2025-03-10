let i = 0;

while (i <= 30) {
  console.log('Number ' + i);
  i++;
}

// Loop over arrays
const arr = [30, 40, 50, 60, 70];

let j = 0; // reset index for loop array
while (j < arr.length) {
  console.log(arr[j]);
  j++;
}

// Nesting while loops
let x = 1; // reset new value to prevent problem
while (x <= 6) {
  console.log('Number ' + x);

  let y = 1;
  while (y <= 5) {
    console.log(`${x} * ${y} = ${x * y}`);
    y++;
  }

  x++;
}

// Do While Loop - Always runs once
let k = 10; // reset value
do {
  console.log('Number ' + k);
  k++;
} while (k <= 20);