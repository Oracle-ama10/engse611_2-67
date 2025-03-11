let dataContainer = document.getElementById("dataContainer");

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        data.forEach(post => {
            let postElement = document.createElement("p");
            postElement.textContent = post.title;
            
            dataContainer.appendChild(postElement);
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });