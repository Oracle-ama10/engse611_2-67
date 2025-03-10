// Loop through objects
const colorObj = {
    primary: 'red',
    secondary: 'green',
    tertiary: 'vendigo',
    quaternary: 'black',
  };
  
  for (const key in colorObj) {
    console.log(key, colorObj[key]);
  }
  
  // Loop through arrays
  const colorArr = ['white', 'red tale', 'blue', 'yellow'];
  
  for (const key in colorArr) {
    console.log(colorArr[key]);
  }
  