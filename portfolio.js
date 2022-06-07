import data from './projectData.js';

const myProjects = data.projects;
const humberger = document.querySelector('#menu-icon');

humberger.addEventListener('click', () => {
  document.querySelector('html').style.overflowY = 'hidden';
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
  const scrollStop = document.querySelector('body');
  scrollStop.style.height = '100%';
  scrollStop.style.overflow = 'hidden';
});

const cancel = document.querySelector('.cancel');
cancel.addEventListener('click', () => {
  document.querySelector('html').style.overflowY = 'scroll';
  document.getElementById('menu-item').style.display = 'none';
  document.getElementById('logo-icon').style.display = 'flex';
  document.getElementById('menu-icon').style.display = 'flex';
  const scrollStop = document.querySelector('body');
  scrollStop.style.overflow = 'scroll';
});

const menuItem = document.getElementById('menu-item');
const listItem = menuItem.querySelectorAll('a');

for (let i = 0; i < listItem.length; i += 1) {
  listItem[i].addEventListener('click', () => {
    if (window.innerWidth < 992) {
      document.querySelector('html').style.overflowY = 'scroll';
      document.getElementById('menu-item').style.display = 'none';
      document.getElementById('logo-icon').style.display = 'flex';
      document.getElementById('menu-icon').style.display = 'flex';
      const scrollStop = document.querySelector('body');
      scrollStop.style.overflow = 'scroll';
    }
  });
}

const portfolioWork = document.querySelector('#portfolio-work');

function implementProject() {
  let i = 0;
  myProjects.forEach((project) => {
    const cardId = `card-button-${i + 1}`;
    portfolioWork.innerHTML += `
    <div class="card blur" id="portfolio">
      <picture class="cardimage swap-order">
        <source srcset=${project.projectImageDesktop} media="(min-width: 992px)" />
        <img class="popup-image" src=${project.projectImageMobile} alt="Blog Images" />
      </picture>
      
      <div class="carditemwrapper">
        <div class="cardheading">
          <h2>${project.projectName}</h2>
        </div>
        <div class="canopyitemwrap">
          <div class="cardcanopy">${project.companyName}</div>
          <div class="dot-cardlistitem">
            <div class="dot cardlistitem">&bull;</div>
            <div class="cardlistitem">${project.projectPosition}</div>
          </div>
          <div class="dot-cardlistitem">  
            <div class="dot cardlistitem">&bull;</div>
            <div class="cardlistitem">${project.projectDate}</div>
          </div>
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
  const allCardButtons = document.querySelectorAll("[id*='card-button']");

  let i = 0;
  myProjects.forEach((project) => {
    allCardButtons[i].addEventListener('click', () => {
      const popupElement = document.createElement('div');

      popupElement.id = 'openPopUp';
      popupElement.setAttribute('class', 'popup');
      popupElement.innerHTML = `  
      <div class = "popup-heading-wrap">
        <div class="popup-heading cardheading"> ${project.projectName}</div>
        <img class="close-icon" src='./images/close2.png'>
      </div>
      <div class="canopyitemwrap">
        <div class="cardcanopy">${project.companyName}</div>
        <div class="dot-cardlistitem">
          <div class="dot cardlistitem">&bull;</div>
          <div class="cardlistitem">${project.projectPosition}</div>
        </div>
        <div class="dot-cardlistitem">
          <div class="dot cardlistitem">&bull;</div>
          <div class="cardlistitem">${project.projectDate}</div>
        </div>
      </div>

     <picture class="popup-cardimage"> 
        <source srcset=${project.projectImageDesktop} media="(min-width: 992px)" />
        <img class="popup-image" src=${project.projectImageMobile} alt="Blog Images" />
      </picture>

    <div class = "desc-tech-btn">
      <div class = "description" >${project.projectDescription}</div>

      <div class = "tech-btn">
        <ul class="cardtechnology">
          <li class="technology">${project.projectTechnologies[0]}</li>
          <li class="technology">${project.projectTechnologies[1]}</li>
          <li class="technology">${project.projectTechnologies[2]}</li>
        </ul>
        <div class='popup-seperator'> </div>
        <div class="popup-button">
          <a href = ${project.seeLivePage} target="_blank">
          <button class="popup-button-liveSource">
            See Live
            <img src=${project.seeLive} alt="">
          </button>
          </a>
          <a href = ${project.seeSourceCode} target="_blank">
          <button class="popup-button-liveSource">
            See Source 
            <img src=${project.seeSource} alt="">
          </button>
          </a>
        </div>
      </div>
    </div>`;

      portfolioWork.appendChild(popupElement);
      if (window.innerWidth >= 992) {
        popupElement.querySelector('.description').innerHTML = project.projectTextDesktop;
        const openPopUp = document.getElementById('openPopUp');
        const popupImage = openPopUp.querySelector('.popup-image');
        popupImage.style.maxHeight = '586px';
        popupImage.style.width = '100%';
        const popupcanopyitemwrap = openPopUp.querySelector('.canopyitemwrap');
        popupcanopyitemwrap.style.marginTop = '-40px';
        popupcanopyitemwrap.style.marginLeft = '0';
        const cardTech = openPopUp.querySelector('.cardtechnology');
        cardTech.classList.add('popup-cardtechnology');

        const additionalTechnology = openPopUp.querySelector('.cardtechnology');
        for (let a = 0; a < project.projectTechnologies.length - 3; a += 1) {
          const liNode = document.createElement('li');
          liNode.classList.add('technology');
          liNode.appendChild(document.createTextNode(`${project.projectTechnologies[3 + a]}`));
          additionalTechnology.appendChild(liNode);
        }
      } else {
        popupElement.querySelector('.description').innerHTML = project.projectTextMobile;
      }

      document.querySelector('html').style.overflowY = 'hidden';

      const blurPage = document.querySelectorAll('.blur');

      for (let i = 0; i < blurPage.length; i += 1) {
        blurPage[i].style.filter = 'blur(10px)';
      }
      const closeBtn = document.querySelector('.close-icon');

      closeBtn.addEventListener('click', () => {
        const openPopUp = document.getElementById('openPopUp');
        openPopUp.remove();
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

function myFunction() {
  if (window.innerWidth >= 992) {
    const nthchild = document.querySelectorAll('.swap-order');
    for (let i = 0; i < nthchild.length; i += 2) {
      nthchild[i].style.order = 1;
    }
  } else {
    const nthchild = document.querySelectorAll('.swap-order');
    for (let i = 0; i < nthchild.length; i += 2) {
      nthchild[i].style.order = 0;
    }
  }
}

window.onload = myFunction();
window.onresize = myFunction;

const form = document.querySelector('#contact-form');
const email = document.querySelector('#email');
const invalidError = document.querySelector('#invalidError');

form.addEventListener('submit', (e) => {
  const emailText = email.value;
  if (emailText !== emailText.toLowerCase()) {
    e.preventDefault();
    invalidError.style.color = 'red';
    invalidError.textContent = 'Please enter your email in lowercase';
  } else {
    invalidError.textContent = '';
  }
});

// Local Storage

const inputNameData = document.getElementById('fname');
const inputEmailData = document.getElementById('email');
const inputMessageData = document.getElementById('message');

const formDataValues = [inputNameData, inputEmailData, inputMessageData];

function retrieveFormData() {
  const saveUserFormData = {};

  for (let a = 0; a < formDataValues.length; a += 1) {
    saveUserFormData[formDataValues[a].id] = formDataValues[a].value;
  }
  return saveUserFormData;
}
function setFormData() {
  const formData = JSON.parse(localStorage.getItem('formData'));
  inputNameData.value = formData.fname;
  inputEmailData.value = formData.email;
  inputMessageData.value = formData.message;
}

function setStorageData() {
  localStorage.setItem('formData', JSON.stringify(retrieveFormData()));
}

inputNameData.setAttribute('onchange', 'setStorageData()');
inputEmailData.setAttribute('onchange', 'setStorageData()');
inputMessageData.setAttribute('onchange', 'setStorageData()');

if (!localStorage.getItem('formData')) {
  setStorageData();
} else {
  setFormData();
}
