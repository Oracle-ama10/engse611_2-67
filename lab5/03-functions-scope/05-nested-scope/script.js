function outerFunction() {
    const a = 30;
  
    function innerFunction() {
      const b = 20;
      console.log(a + b);
    }
  
  
    innerFunction();
  }
  
  outerFunction();
  
  if (true) {
    const num = 100;
    let factor;  // Declare factor in the outer block

    if (num === 100) {
        factor = 2;  // Assign value inside the inner block
        console.log(num * factor);  // 
    }

    console.log(factor);  //
}

  