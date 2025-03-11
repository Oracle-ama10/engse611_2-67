let button = document.getElementById("toggleClassButton");

button.addEventListener("click", function() {
    let paragraph = document.getElementById("example");
    
    paragraph.classList.toggle("new-class");
});