const humberger = document.querySelector('#menu-icon');
humberger.addEventListener('click', () => {
  const navLinks = document.getElementById('menu-item');
  document.getElementById('logo-icon').style.display = 'none';
  document.getElementById('menu-icon').style.display = 'none';
  document.getElementById('menu-item').style.display = 'flex';

  navLinks.classList.add('menu-list-item');
  const listItem = document.querySelectorAll('a');

  for (let i = 1; i < listItem.length; i += 1) {
    listItem[i].style.display = 'flex';
    listItem[i].style.paddingBottom = '25px';
    listItem[i].style.paddingTop = '20px';
    listItem[i].style.paddingLeft = '20px';
  }
});

const cancel = document.querySelector('.cancel');
cancel.addEventListener('click', () => {
  document.getElementById('menu-item').style.display = 'none';
  document.getElementById('logo-icon').style.display = 'flex';
  document.getElementById('menu-icon').style.display = 'flex';
});
const listItem = document.querySelectorAll('a');

for (let i = 0; i < listItem.length; i += 1) {
  listItem[i].addEventListener('click', () => {
    document.getElementById('menu-item').style.display = 'none';
    document.getElementById('logo-icon').style.display = 'flex';
    document.getElementById('menu-icon').style.display = 'flex';
    window.location.reload();
  });
}

const btnSeeProject = document.querySelectorAll('.btnseeproject');
const card = document.querySelectorAll('.card');
// card.forEach(p => console.log(p));
// var cardImage = card[2].children[0];
// console.log(cardImage);
// // var image1 = document.write(cardImage);
// for (let i = 0; i < card.length; i += 1) {
//   // console.log(card[i].children.length);
//   // let card1 = card[0];
//   var cardImage1 = card[i].children[0];
//   // console.log(cardImage1);
//   for (let j = 0; j < card[0].children.length; j += 1) {
//     // console.log(card[i].children[0]);
//   }
// }

for (let m = 0; m < btnSeeProject.length - 2; m += 1) {
  btnSeeProject[m].addEventListener('click', () => {
    CardDisplay(m);
  });
}

function CardDisplay(indexValue) {
  const cardImage = card[indexValue].children[0];
  const project = [{
    closePopup: './images/close2.png',
    projectImage: `${cardImage.innerHTML}`,
  }];
  const htmlMarkup = `
  <img class="close-icon" src=${project[0].closePopup}>
  <br>
  ${project[0].projectImage}
  `;
  const section = document.createElement('section');
  section.className = 'default';
  document.body.appendChild(section);
  section.innerHTML = htmlMarkup;
  const closeIcon = document.querySelector('.close-icon');
  function display() {
    section.classList.toggle('popup');
  }
  closeIcon.addEventListener('click', display);

  section.classList.toggle('popup');
}
