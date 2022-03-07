const humberger = document.querySelector('#menu-icon');

const listItem = document.querySelectorAll('a');

for (let i = 1; i < listItem.length; i += 1) {
  listItem[i].style.display = 'flex';
  listItem[i].style.alignItems = 'center';
  listItem[i].style.fontSize = '32px';
  listItem[i].style.lineHeight = '44px';
  listItem[i].style.fontWeight = '600';
  listItem[i].style.color = '#fff';
  listItem[i].style.paddingBottom = '25px';
  listItem[i].style.paddingTop = '10px';
  listItem[i].style.paddingLeft = '20px';
}

humberger.addEventListener('click', () => {
  const navLinks = document.getElementById('menu-item');
  document.getElementById('logo-icon').style.display = 'none';
  document.getElementById('menu-icon').style.display = 'none';
  document.getElementById('menu-item').style.display = 'flex';

  navLinks.classList.add('menu-list-item');
});

const cancel = document.querySelector('.cancel');
cancel.addEventListener('click', () => {
  document.getElementById('menu-item').style.display = 'none';
  document.getElementById('logo-icon').style.display = 'flex';
  document.getElementById('menu-icon').style.display = 'flex';
});
// const listItem = document.querySelectorAll('.list-items');

for (let i = 0; i < listItem.length; i += 1) {
  listItem[i].addEventListener('click', () => {
    document.getElementById('menu-item').style.display = 'none';
    document.getElementById('logo-icon').style.display = 'flex';
    document.getElementById('menu-icon').style.display = 'flex';
  });
}
