function replaceFirstItem() {
  const firstItem = document.querySelector('li:first-child');

  const li = document.createElement('li');
  li.textContent = 'Updated First';

  firstItem.replaceWith(li);
}

function replaceSecondItem() {
  const secondItem = document.querySelector('li:nth-child(2)');

  secondItem.outerHTML = '<li>Updated Second</li>';
}

function replaceAllItems() {
  const lis = document.querySelectorAll('li');

  lis.forEach(
    (item, index) =>
      (item.outerHTML = index === 1 ? '<li>New Second Item</li>' : '<li>New Item</li>')
  );
}

function replaceChildHeading() {
  const header = document.querySelector('header');
  const h1 = document.querySelector('header h1');

  const h2 = document.createElement('h2');
  h2.id = 'app-title';
  h2.textContent = 'New Updated Shopping List';
  header.replaceChild(h2, h1);
}

replaceFirstItem();
replaceSecondItem();
replaceAllItems();
replaceChildHeading();
