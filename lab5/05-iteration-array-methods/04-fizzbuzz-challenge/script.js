for (let i = 1; i <= 100; i++) {
    let output = "";
  
    if (i % 6 === 0) output += "Fizz";
    if (i % 12 === 0) output += "Buzz";
  
    console.log(output || i);
  }
  