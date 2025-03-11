function removeDeleteButton() {
  const deleteBtn = document.querySelector('#clear');
  if (deleteBtn) deleteBtn.remove();
}

function removeFirstListItem() {
  const ul = document.querySelector('ul');
  const li = document.querySelector('li:first-child');

  if (li) ul.removeChild(li);
}

function deleteItem(itemNumber) {
  const ul = document.querySelector('ul');
  const li = document.querySelector(`li:nth-child(${itemNumber})`);

  if (li) ul.removeChild(li);
}

function deleteItem2(itemNumber) {
  const ul = document.querySelector('ul');
  const li = document.querySelectorAll('li')[itemNumber - 1];

  if (li) ul.removeChild(li);
}

function deleteItem3(itemNumber) {
  const li = document.querySelectorAll('li');

  if (li[itemNumber - 1]) li[itemNumber - 1].remove();
}

const deleteItem4 = (itemNumber) => {
  const li = document.querySelectorAll('li');
  if (li[itemNumber - 1]) li[itemNumber - 1].remove();
};

document.querySelector('#clear')?.addEventListener('click', removeDeleteButton);

removeDeleteButton();
removeFirstListItem();
deleteItem(2); 
deleteItem4(3); 











/*
// remove() Method
function removeDeleteButton() {
  const deleteBtn = document.querySelector('#clear');
  deleteBtn.remove();
}

// removeChild() Method
function removeFirstListItem() {
  const ul = document.querySelector('ul');
  const li = document.querySelector('li:first-child');

  ul.removeChild(li);
}

// Other examples

function deleteItem(itemNumber) {
  const ul = document.querySelector('ul');
  const li = document.querySelector(`li:nth-child(${itemNumber})`);

  ul.removeChild(li);
}

function deleteItem2(itemNumber) {
  const ul = document.querySelector('ul');
  const li = document.querySelectorAll('li')[itemNumber - 1];

  ul.removeChild(li);
}

function deleteItem3(itemNumber) {
  const li = document.querySelectorAll('li');
  li[itemNumber - 1].remove();
}

const deleteItem4 = (itemNumber) =>
  document.querySelectorAll('li')[itemNumber - 1].remove();

removeDeleteButton();
// removeFirstListItem();
// deleteItem(2);
deleteItem4(2);
*/