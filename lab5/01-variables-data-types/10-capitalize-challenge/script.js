
function capitalize(str) {

    // Split string into an array of words based on space "hello world" => ["hello", "world"]
    const string = str.split(" ");
    const cased = []; 
  
    // Convert every first letter to uppercase
    string.map((word) => {
      cased.push(word[0].toUpperCase() + word.slice(1).toLowerCase());
    }); //"hello" => "H"               +        "ello"                => "Hello" add the words to "cased" with .push

  
    // Convert my words array to a string with .join() based on space ["Hello", "World"] => "Hello World"
    return cased.join(" ");
  } 

  console.log(capitalize("i love wars,ilovewars"));

  

const myString = 'man';
const myNewString = myString.charAt(0).toUpperCase() + myString.substring(1);



console.log(myNewString); // 'man'