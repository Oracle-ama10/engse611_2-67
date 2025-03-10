let x;

const arr = [10,20,30,40,50];
console.log(arr);
// push() - Push a value on to the end of the array
arr.push(60);
console.log(arr);
// pop() - Take the last value off
arr.pop();
console.log(arr);
// unshift() - Add a value to the beginning of the array
arr.unshift(0);
console.log(arr);
// shift() - Remove first value
arr.shift();
console.log(arr);
// reverse() - Reverse an array
arr.reverse();
console.log(arr);
// includes() - Check to see if something is in the array
x = arr.includes(445);
console.log(x);
// indexOf() - Return the index of the first match
x = arr.indexOf(28);
console.log(x);
// Return array as a string
x = arr.toString();
x = arr.join();
console.log(x);
// slice() returns selected elements in an array, as a new array. Slice takes in the index of the first element and the index of the last element to be included in the new array.
x = arr.slice(1, 4);
console.log(x);
// splice() works like slice() except it takes the index of the first element and the number of elements after that as a second argument. it also mutates the original array where slice() does not
x = arr.splice(1, 4);
console.log(x);
// Remove a single element/value - The following will mutate the original array by taking out the element with the index of 4. x will be equal to a new array with that plucked out value.
x = arr.splice(4, 1);
console.log(x);
// Chaining methods - Some methods can be chained depending on the return value.
x = arr.slice(1, 4).reverse().toString().charAt(0);
console.log(x);