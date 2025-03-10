if (1) {
    console.log('This evaluates to true');
  }
  
  if (0) {
    console.log('This evaluates to false');
  }
  
 
  const a = 15;
  const b = 10;
  
  if (a > b) {
    console.log(`${a} is greater than ${b}`);
  }
  
  if (a === b) {
    console.log(`${a} is equal to ${b}`);
  } else {
    console.log(`${a} is NOT equal to ${b}`);
  }
  
 
  if (a !== b) {
    let c = 30;
    console.log(`${c} is 30`);
  }
  

  a > b
    ? console.log(`${a} is greater than ${b}`, 'This is true')
    : console.log('This is false');
  