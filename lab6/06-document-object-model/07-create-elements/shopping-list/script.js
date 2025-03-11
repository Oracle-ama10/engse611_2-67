const div = document.createElement('div');
div.className = 'my-element';
div.id = 'my-element';
div.setAttribute('title', 'My Element');


const text = document.createTextNode('sup');
div.appendChild(text);


document.querySelector('ul').appendChild(div);
