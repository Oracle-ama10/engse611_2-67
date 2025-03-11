document.addEventListener("DOMContentLoaded", function () {
    let textElement = document.getElementById("change");
    let button = document.getElementById("changeTextButton");

    button.addEventListener("click", function () {
        textElement.textContent = "Something new";
    });
});
