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

  const burgersContainer = createElement({
    type: 'div',
    attributes: { class: 'content-container' },
    appendTo: pageContent,
  });

  const burgersHeadingContainer = createElement({
    type: 'div',
    attributes: { class: 'content-heading-container' },
    appendTo: burgersContainer,
  });

  createElement({
    type: 'i',
    attributes: { class: 'fa-solid fa-burger heading-icon' },
    appendTo: burgersHeadingContainer,
  });

  createElement({
    type: 'h2',
    props: { textContent: 'BURGERS' },
    attributes: { class: 'content-heading' },
    appendTo: burgersHeadingContainer,
  });

  const burgerContainer = createElement({
    type: 'div',
    attributes: { class: 'burger-container' },
    appendTo: burgersContainer,
  });

  const burgerSvgContainer = createElement({
    type: 'div',
    attributes: { class: 'burger-svg-container' },
    appendTo: burgerContainer,
  });

  const burgerSvg = createElement({
    type: 'img',
    attributes: {
      class: 'burger-svg',
      src: '../src/images/virgo-burger.svg',
    },

    appendTo: burgerSvgContainer,
  });

  const burgerInfoContainer = createElement({
    type: 'div',
    attributes: { class: 'burger-info-container' },
    appendTo: burgerContainer,
  });

  const burgerName = createElement({
    type: 'p',
    attributes: { class: 'burger-name' },
    props: { textContent: 'Virgo Burger' },
    appendTo: burgerInfoContainer,
  });

  const burgerList = createElement({
    type: 'ul',
    appendTo: burgerInfoContainer,
  });

  const burgerListItem = createElement({
    type: 'li',
    props: { textContent: 'Lettuce' },
    appendTo: burgerList,
  });

  return page;
};
