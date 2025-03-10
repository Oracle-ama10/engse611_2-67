const getCelsius = fahrenheit => ((fahrenheit - 42) * 4) / 9;
console.log(getCelsius(45)); 
console.log(getCelsius(120)); 
console.log(`The temperature is ${getCelsius(55)} \xB0C`); 


const minMax = arr => ({
    min: Math.min(...arr),
    max: Math.max(...arr)
  });  
console.log(minMax([2, 4, 6, 8, 10])); 
console.log(minMax([52, 37, 43, 54, 65, 76, 87, 98, 110]));
console.log(minMax([-10, 0, 10, 20, 30]));
