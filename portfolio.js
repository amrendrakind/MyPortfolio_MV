import data from './projectData.js';

const myProjects = data.projects;
const humberger = document.querySelector('#menu-icon');

humberger.addEventListener('click', () => {
  const navLinks = document.getElementById('menu-item');
  document.getElementById('logo-icon').style.display = 'none';
  document.getElementById('menu-icon').style.display = 'none';
  document.getElementById('menu-item').style.display = 'flex';

  navLinks.classList.add('menu-list-item');
  const scrollStop = document.querySelector('body');
  scrollStop.style.overflow = 'hidden';
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
  const scrollStop = document.querySelector('body');
  scrollStop.style.overflow = 'scroll';
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

const section = document.createElement('section');
section.className = 'default1';
document.body.appendChild(section);
// Dynamic Implementation
const portfolioWork = document.querySelector('#portfolio-work');

function implementProject() {
  let i = 0;
  myProjects.forEach((project) => {
    const cardId = `card-button-${i + 1}`;
    portfolioWork.innerHTML += `
    <div class="card blur" id="portfolio">
    <picture class="cardimage">
      <source srcset="./images/Nature.png" media="(min-width: 992px)" />
      <img class="popup-image" src="./images/blog_drbl_4x.png" alt="Blog Images" />
    </picture>
    
    <div class="carditemwrapper">
      <div class="cardheading">
        <h2>${project.projectName}</h2>
      </div>
      <div class="canopyitemwrap">
        <div class="cardcanopy">${project.companyName}</div>
        <div class="dot cardlistitem">&bull;</div>
        <div class="cardlistitem">${project.projectPosition}</div>
        <div class="dot cardlistitem">&bull;</div>
        <div class="cardlistitem">${project.projectDate}</div>
      </div>
      <div class="cardabout">
        <p>${project.projectDescription}</p>
      </div>
      <ul class="cardtechnology">
        <li class="technology">${project.projectTechnologies[0]}</li>
        <li class="technology">${project.projectTechnologies[1]}</li>
        <li class="technology">${project.projectTechnologies[2]}</li>
      </ul>
      <button data-key="${project.key}" id="${cardId}" type="button" class="btnseeproject">See Project</button>
    </div>
    </div>`;
    i += 1;
  });
}

implementProject();
// Popup Creation

function openPopup() {
  const project1 = [{
    cardImage: ` <picture class="cardimage">
    <source srcset="./images/Nature.png" media="(min-width: 992px)" />
    <img class="popup-image" src="./images/blog_drbl_4x.png" alt="Blog Images" />
  </picture>`,
  }];

  const allCardButtons = document.querySelectorAll("[id*='card-button']");

  let i = 0;
  myProjects.forEach((project) => {
    allCardButtons[i].addEventListener('click', () => {
      const modalElement = document.createElement('div');

      modalElement.id = 'openPopUp';
      modalElement.setAttribute('class', 'popup');
      modalElement.innerHTML = `  
      <div class = "popup-heading-wrap">
        <div class="popup-heading cardheading"> ${project.projectName}</div>
        <img class="close-icon" src='./images/close2.png'>
      </div>

      <div class="canopyitemwrap">
        <div class="cardcanopy">${project.companyName}</div>
        <div class="dot cardlistitem">&bull;</div>
        <div class="cardlistitem">${project.projectPosition}</div>
        <div class="dot cardlistitem">&bull;</div>
        <div class="cardlistitem">${project.projectDate}</div>
      </div>

     <picture class="popup-cardimage">  ${project1[0].cardImage} </picture>

    <div class = "desc-tech-btn">
      <div class = "description" >${project.projectDescription}</div>

      <div class = "tech-btn">
        <ul class="cardtechnology">
        <li class="technology">${project.projectTechnologies[0]}</li>
        <li class="technology">${project.projectTechnologies[1]}</li>
        <li class="technology">${project.projectTechnologies[2]}</li>
        </ul>
        <div class="popup-button">
          <button class="popup-button-liveSource">
            See Live
            <img src=${project.seeLive} alt="">
          </button>
          <button class="popup-button-liveSource">
            See Source
            <img src=${project.seeSource} alt="">
          </button>
        </div>
      </div>
    </div>`;

      portfolioWork.appendChild(modalElement);
      if (window.innerWidth >= 992) {
        modalElement.querySelector('.description').innerHTML = project.projectTextDesktop;
        const openPopUp = document.getElementById('openPopUp');
        const popupImage = openPopUp.querySelector('.popup-image');
        popupImage.style.maxHeight = '586px';
        popupImage.style.width = '97%';
      } else {
        modalElement.querySelector('.description').innerHTML = project.projectTextMobile;
      }

      document.querySelector('html').style.overflowY = 'hidden';

      const blurPage = document.querySelectorAll('.blur');

      for (let i = 0; i < blurPage.length; i += 1) {
        blurPage[i].style.filter = 'blur(10px)';
      }
      const closeBtn = document.querySelector('.close-icon');

      closeBtn.addEventListener('click', () => {
        const modal = document.getElementById('openPopUp');
        modal.remove();
        document.querySelector('html').style.overflowY = 'auto';
        const blurPage = document.querySelectorAll('.blur');

        for (let i = 0; i < blurPage.length; i += 1) {
          blurPage[i].style.filter = 'blur(0)';
        }
      });
    });

    i += 1;
  });
}
openPopup();
