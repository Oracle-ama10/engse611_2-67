let button = document.getElementById("changeStyleButton");

button.addEventListener("click", function() {
    let paragraph = document.getElementById("change");

    paragraph.style.backgroundColor = "lightblue";
    paragraph.style.fontSize = "20px";
});