
//stack
let Aset = "Sven"; // Primitive type stored in the Stack.
let Amet = Aset;   // A copy of the value is created in the Stack.
Amet = "Sim99@";        // Changing the copy does not affect the original.

console.log(Aset); //(Original value remains unchanged)
console.log(Amet);   //(Only the copy value is changed)
console.log("-----------------------------------------------------------------------------------------")
let Sim1 = {         // The reference to this object is stored in the Stack.
    email: "user@google.com",
    upi: "user@ybl"
};                      // The actual object data is stored in the Heap.

let Sim2 = Sim1;  // userTwo references the same object in the Heap.

Sim2.email = "Smash@google.com"; // Modifying niga2 also affects niga1.

console.log(Sim1.email); // Output: The same as niga2 
console.log(Sim2.email); 