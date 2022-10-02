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
homeButton.textContent = 'Home';

const menuButton = document.createElement('button');
menuButton.textContent = 'Menu';

const contactsButton = document.createElement('button');
contactsButton.textContent = 'Contacts';

const navButtons = [homeButton, menuButton, contactsButton];

navButtons.forEach((btn) => {
  btn.classList.add('nav-btn');
  buttonsContainer.append(btn);
});

const basePageContainer = document.createElement('section');
basePageContainer.classList.add('page-container');

contentDiv.append(basePageContainer);

const homePage = createHomePage();
basePageContainer.append(homePage);

const menuPage = createMenuPage();
basePageContainer.append(menuPage);

const contactsPage = createContactsPage();
basePageContainer.append(contactsPage);

homeButton.addEventListener('click', () => {
  menuPage.style.display = 'none';
  contactsPage.style.display = 'none';
  homePage.style.display = 'flex';
});

menuButton.addEventListener('click', () => {
  homePage.style.display = 'none';
  contactsPage.style.display = 'none';
  menuPage.style.display = 'flex';
});

contactsButton.addEventListener('click', () => {
  homePage.style.display = 'none';
  menuPage.style.display = 'none';
  contactsPage.style.display = 'flex';
});
