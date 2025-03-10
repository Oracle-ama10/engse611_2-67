for (let i = 0; i <= 10; i++) {
    if (i === 7) {
      console.log('7 is my lucky number');
    } else {
      console.log('Number ' + i);
    }
  }
    //nested loop 
  for (let i = 1; i <= 10; i++) {
    console.log('Number ' + i);
  
    for (let j = 1; j <= 5; j++) {
      console.log(`${i} * ${j} = ${i * j}`);
    }
  }
    // Loop through an array 
const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];

for (let i = 0; i < names.length; i++) {
  if (names[i] === 'David') {
    console.log(names[i] + ' is the best');
  } else {
    console.log(names[i]);
  }
}
  