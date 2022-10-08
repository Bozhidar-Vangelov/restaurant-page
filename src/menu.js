import { createElement } from './utils.js';

export const createMenuPage = (pageContainer) => {
  const headingText = 'Menu';
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

  const pageContent = createElement({
    type: 'div',
    attributes: { class: 'page-content' },
    appendTo: page,
  });

  const workingHoursContainer = createElement({
    type: 'div',
    attributes: { class: 'content-container' },
    appendTo: pageContent,
  });

  const workingHoursHeadingContainer = createElement({
    type: 'div',
    attributes: { class: 'content-heading-container' },
    appendTo: workingHoursContainer,
  });

  createElement({
    type: 'i',
    attributes: { class: 'fa-solid fa-clock clock-icon' },
    appendTo: workingHoursHeadingContainer,
  });

  createElement({
    type: 'h2',
    props: { textContent: 'BURGERS' },

    attributes: { class: 'content-heading' },
    appendTo: workingHoursHeadingContainer,
  });

  return page;
};
