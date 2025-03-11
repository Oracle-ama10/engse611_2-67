
let inputElement = document.getElementById("exampleInput");
let form = document.getElementById("exampleForm");

form.addEventListener("submit", function(event) {
    event.preventDefault(); 

    let inputValue = inputElement.value;
    
    let output = document.getElementById("output");
    output.textContent = "Add some word : " + inputValue;
});