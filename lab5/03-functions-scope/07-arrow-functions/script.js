const multiply = (x, y) => {
    return x * y;
  };
  
  const divide = (x, y) => x / y;
  
  const square = num => num ** 3;
  
  const getUser = () => ({
    username: 'Grim',
  });
  
  const values = [125, 250, 375, 500, 625];
  
  values.forEach(function (val) {
    console.log(val);
  });
  
  values.forEach(val => console.log(val));
  
  console.log(multiply(3, 4));
  console.log(divide(20, 4));
  console.log(square(5));
  console.log(getUser());
  