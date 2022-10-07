import { createElement } from './utils.js';

export const createContactsPage = (pageContainer) => {
  const headingText = 'Contacts';
  const initialDisplayStyle = 'none';

  const page = createElement({
    type: 'div',
    styles: { 'min-width': '70%', display: initialDisplayStyle },
    attributes: { class: 'page' },
    appendTo: pageContainer,
  });

  createElement({
    type: 'h1',
    props: { textContent: headingText },
    appendTo: page,
  });

  return page;
};
