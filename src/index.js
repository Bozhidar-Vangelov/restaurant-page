import { createContactsPage } from './contacts.js';
import { createHomePage } from './home.js';
import { createMenuPage } from './menu.js';
import './styles.css';
import { createElement, navButtonsText } from './utils.js';

const contentDiv = document.getElementById('content');

const headerElement = createElement({
  type: 'header',
  attributes: { id: 'header' },
  appendTo: contentDiv,
});

const logoContainer = createElement({
  type: 'div',
  attributes: { class: 'logo-container' },
  appendTo: headerElement,
});

createElement({
  type: 'img',
  attributes: { class: 'logo', src: '../src/images/logo.png' },
  appendTo: logoContainer,
});

const buttonsContainer = createElement({
  type: 'div',
  attributes: { class: 'buttons-container', src: '../src/images/logo.png' },
  appendTo: headerElement,
});

const handleButtonClick = (e) => {
  const buttonText = e.target.textContent;

  switch (buttonText) {
    case 'Home':
      menuPage.style.display = 'none';
      contactsPage.style.display = 'none';
      homePage.style.display = 'flex';
      break;
    case 'Menu':
      homePage.style.display = 'none';
      contactsPage.style.display = 'none';
      menuPage.style.display = 'flex';
      break;
    case 'Contacts':
      homePage.style.display = 'none';
      menuPage.style.display = 'none';
      contactsPage.style.display = 'flex';
  }
};

navButtonsText.forEach((text) => {
  createElement({
    type: 'button',
    attributes: { class: 'nav-btn' },
    props: { textContent: text },
    appendTo: buttonsContainer,
    eventHandlers: { click: handleButtonClick },
  });
});

const basePageContainer = createElement({
  type: 'section',
  attributes: { class: 'page-container' },
  appendTo: contentDiv,
});

const homePage = createHomePage(basePageContainer);

const menuPage = createMenuPage(basePageContainer);

const contactsPage = createContactsPage(basePageContainer);
