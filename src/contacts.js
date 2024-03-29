import { map } from './assets';
import { contactsData, contactsPageContainersData } from './data.js';
import { createContainers, createElement } from './utils.js';

export const createContactsPage = (pageContainer) => {
  const headingText = 'Contacts';

  const page = createElement({
    type: 'div',
    styles: { 'min-width': '70%' },
    attributes: { class: 'page' },
    appendTo: pageContainer,
  });

  createElement({
    type: 'h1',
    props: { textContent: headingText },
    appendTo: page,
  });

  const pageContent = createElement({
    type: 'div',
    attributes: { class: 'page-content flex justify-center' },
    appendTo: page,
  });

  const [contactsContainer, mapContainer] = createContainers(
    pageContent,
    contactsPageContainersData
  );

  createContacts(contactsContainer, contactsData);

  createElement({
    type: 'img',
    attributes: {
      class: 'map-img',
      src: map,
    },
    appendTo: mapContainer,
  });

  return page;
};

const createContacts = (contactsContainer, contactsData) => {
  Object.keys(contactsData).forEach((key) => {
    createElement({
      type: 'h2',
      attributes: { class: 'contact' },
      props: { textContent: `${key.toUpperCase()}: ${contactsData[key]}` },
      appendTo: contactsContainer,
    });
  });
};
