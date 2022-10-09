import { createContainers, createElement } from './utils.js';

const containersData = [
  {
    iconClass: 'fa-solid fa-burger heading-icon',
    textContent: 'BURGERS',
  },
];

const burgers = [
  {
    name: 'Virgo Burger',
    src: '../src/images/virgo-burger.svg',
    ingredients: ['Lettuce', 'Meat', 'Cheese', 'Tomatoes', 'Sauce'],
  },
  {
    name: 'Miss Classy',
    src: '../src/images/miss-classy.svg',
    ingredients: ['Lettuce', 'Meat', 'Cheese', 'Tomatoes', 'Sauce'],
  },
];

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

  const [burgersContainer] = createContainers(pageContent, containersData);

  createBurgers(burgersContainer, burgers);

  return page;
};

const createBurgers = (burgersContainer, burgers) => {
  burgers.forEach((burger) => {
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

    createElement({
      type: 'img',
      attributes: {
        class: 'burger-svg',
        src: burger.src,
      },

      appendTo: burgerSvgContainer,
    });

    const burgerInfoContainer = createElement({
      type: 'div',
      attributes: { class: 'burger-info-container' },
      appendTo: burgerContainer,
    });

    createElement({
      type: 'p',
      attributes: { class: 'burger-name' },
      props: { textContent: burger.name },
      appendTo: burgerInfoContainer,
    });

    const burgerList = createElement({
      type: 'ul',
      appendTo: burgerInfoContainer,
      attributes: { class: 'burger-ingredients-container' },
    });

    burger.ingredients.forEach((ingredient) =>
      createElement({
        type: 'li',
        props: { textContent: ingredient },
        appendTo: burgerList,
      })
    );
  });
};
