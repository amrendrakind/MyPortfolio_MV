const humberger = document.querySelector('#menu-icon');
humberger.addEventListener('click', () => {
  const navLinks = document.getElementById('menu-item');
  document.getElementById('logo-icon').style.display = 'none';
  document.getElementById('menu-icon').style.display = 'none';
  document.getElementById('menu-item').style.display = 'flex';
  // const backgroundimageBlur = document.querySelector('.backgroundimage');

  navLinks.classList.add('menu-list-item');
  // backgroundimageBlur.classList.add('blur');
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
const section = document.createElement('section');
section.className = 'default1';
document.body.appendChild(section);

for (let m = 0; m < btnSeeProject.length - 2; m += 1) {
  btnSeeProject[m].addEventListener('click', () => {
    // eslint-disable-next-line no-use-before-define
    CardDisplay(m);
  });
}

function CardDisplay(indexValue) {
  const portfolioHeading = card[indexValue].children[1].children[0];
  const canopyItem = card[indexValue].children[1].children[1];
  const cardImage = card[indexValue].children[0];
  const technology = card[indexValue].children[1].children[3];

  const project = [{
    closePopup: './images/close2.png',
    portfolioHeading: `${portfolioHeading.innerHTML}`,
    projectImage: `${cardImage.innerHTML}`,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
    + 'standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type'
    + 'specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    seeLive: './images/seeLive.png',
    seeSource: './images/seeSource.png',
    liveProjectLink: 'https://amrendrakind.github.io/MyPortfolio_MV/',
    SourceCodeLink: 'https://github.com/amrendrakind/MyPortfolio_MV',
  }];

  const htmlMarkup = `
  <div class = "popup-heading-wrap">
    <div class="popup-heading">    ${portfolioHeading.innerHTML}</div>
    <img class="close-icon" src=${project[0].closePopup}>
  </div>
  <div class="popup-canopy" >${canopyItem.innerHTML}</div>
  <picture class="popup-cardimage">
    ${cardImage.innerHTML}
  </picture>
  
<div class = "desc-tech-btn">
    <div class = "description" >${project[0].description}</div>
    <div class = "tech-btn">
      <div class="popup-technology" >${technology.innerHTML}</div>
      <div class="popup-button">
        <button class="popup-button-liveSource">
          See Live
          <img src=${project[0].seeLive} alt="">
        </button>
        <button class="popup-button-liveSource">
          See Source
          <img src=${project[0].seeSource} alt="">
        </button>
      </div>
    </div>
</div>
  `;

  section.innerHTML = htmlMarkup;

  const default1 = document.querySelector('.default1');
  const mediaQuery = window.matchMedia('(min-width: 992px)');
  if (mediaQuery.matches) {
    const popupImage = default1.querySelector('.popup-image');
    popupImage.style.height = '486px';
    popupImage.style.width = '1108px';
  }

  const closeIcon = document.querySelector('.close-icon');
  section.classList.toggle('popup');
  function display() {
    section.classList.toggle('popup');
  }
  closeIcon.addEventListener('click', display);
}
