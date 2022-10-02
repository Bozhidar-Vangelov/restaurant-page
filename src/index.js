import './styles.css';
import { createHomePage } from './home.js';
import { createMenuPage } from './menu.js';
import { createContactsPage } from './contacts.js';

const contentDiv = document.getElementById('content');

const headerElement = document.createElement('header');
headerElement.setAttribute('id', 'header');
contentDiv.append(headerElement);

const logoContainer = document.createElement('div', 'logo-container');
logoContainer.classList.add('logo-container');
headerElement.append(logoContainer);

const logoImg = document.createElement('img');
logoImg.classList.add('logo');
logoImg.setAttribute('src', '../src/images/logo.png');
logoContainer.append(logoImg);

const buttonsContainer = document.createElement('div');
buttonsContainer.classList.add('buttons-container');
headerElement.append(buttonsContainer);

const homeButton = document.createElement('button');
homeButton.classList.add('nav-btn');
homeButton.textContent = 'Home';
buttonsContainer.append(homeButton);

const menuButton = document.createElement('button');
menuButton.classList.add('nav-btn');
menuButton.textContent = 'Menu';
buttonsContainer.append(menuButton);

const contactsButton = document.createElement('button');
contactsButton.classList.add('nav-btn');
contactsButton.textContent = 'Contacts';
buttonsContainer.append(contactsButton);

const homePage = createHomePage();
contentDiv.append(homePage);

const menuPage = createMenuPage();
contentDiv.append(menuPage);

const contactsPage = createContactsPage();
contentDiv.append(contactsPage);

homeButton.addEventListener('click', () => {
  menuPage.style.display = 'none';
  contactsPage.style.display = 'none';
  homePage.style.display = 'block';
});

menuButton.addEventListener('click', () => {
  homePage.style.display = 'none';
  contactsPage.style.display = 'none';
  menuPage.style.display = 'block';
});

contactsButton.addEventListener('click', () => {
  homePage.style.display = 'none';
  menuPage.style.display = 'none';
  contactsPage.style.display = 'block';
});
