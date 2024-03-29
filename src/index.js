import './assets';
import './styles.css';
import { createContactsPage } from './contacts.js';
import { createHeader } from './header.js';
import { createHomePage } from './home.js';
import { createMenuPage } from './menu.js';
import { createElement } from './utils.js';

const navButtonsText = ['Home', 'Menu', 'Contacts'];

const contentDiv = document.getElementById('content');

const headerElement = createHeader(contentDiv);

const buttonsContainer = createElement({
  type: 'div',
  attributes: {
    class: 'buttons-container flex justify-center',
  },
  appendTo: headerElement,
});

const basePageContainer = createElement({
  type: 'section',
  attributes: { class: 'page-container flex justify-center' },
  appendTo: contentDiv,
});

createHomePage(basePageContainer);

const handleButtonClick = (e) => {
  basePageContainer.removeChild(basePageContainer.firstChild);

  const buttonText = e.target.textContent;

  switch (buttonText) {
    case 'Home':
      createHomePage(basePageContainer);
      break;
    case 'Menu':
      createMenuPage(basePageContainer);
      break;
    case 'Contacts':
      createContactsPage(basePageContainer);
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
