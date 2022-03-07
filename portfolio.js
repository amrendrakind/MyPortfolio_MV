const humberger = document.querySelector('#menu-icon');

humberger.addEventListener('click', () => {
  const navLinks = document.getElementById('menu-item');

  document.getElementById('logo-icon').style.display = 'none';
  document.getElementById('menu-icon').style.display = 'none';
  document.getElementById('menu-item').style.display = 'flex';

  navLinks.classList.add('menu-list-item');
});
