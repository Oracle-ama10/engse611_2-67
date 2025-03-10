let a = null;

// if (!a) {
//   a = 10;
// }

// a = a || 10;

a ||= 10;

console.log(a); //10 ( `a` = `null`)

let b = 10;

// if (b) {
//   b = 20;
// }

// b = b && 20;

b &&= 20;

console.log(b); // 20 (`b` =truthy)

let c = null;

// if (c === null || c === undefined) {
//   c = 20;
// }

// c = c ?? 20;

c ??= 20;

console.log(c); //20 (`c` =`null`)

