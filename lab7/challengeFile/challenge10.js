let element = document.getElementById("animateMe");
let button = document.getElementById("animateButton");

function triggerAnimation() {
    element.style.width = "200px";
    element.style.height = "200px";
    element.style.backgroundColor = "red";
}

button.addEventListener("click", triggerAnimation);

let position = 0;
function animate() {
    if (position < 350) {
        position++;
        element.style.left = position + "px";
    } else {
        clearInterval(interval);
    }
}
let interval = setInterval(animate, 10);