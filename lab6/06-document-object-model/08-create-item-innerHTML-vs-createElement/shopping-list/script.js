function createListItem(item) {
  const li = document.createElement('li');

  li.innerHTML = `${item}
  <button class="delete-item btn-link text-blue">
    <i class="fa-solid fa-trash"></i>
  </button>`;

  document.querySelector('.list').appendChild(li);
}

function createNewItem(item) {
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(item));

  const button = document.createElement('button');
  button.className = 'delete-item btn-link text-blue';

  const icon = document.createElement('i');
  icon.className = 'fa-solid fa-trash';

  button.appendChild(icon);
  li.appendChild(button);

  document.querySelector('.list').appendChild(li);
}

createListItem('Apples');
createNewItem('Bread');
