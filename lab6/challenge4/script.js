const links = document.querySelectorAll('nav a'); 

links.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault(); 
        alert(this.textContent.trim());
    });
});

