import { createContainers, createElement } from './utils.js';
import { menuContainersData, burgers } from './data.js';

export const createMenuPage = (pageContainer) => {
  const headingText = 'Menu';

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

  const [contentContainer] = createContainers(pageContent, menuContainersData);

  createBurgers(contentContainer, burgers);

  return page;
};

const createBurgers = (contentContainer, burgers) => {
  const burgersContainer = createElement({
    type: 'div',
    attributes: { class: 'burgers-container flex justify-center' },
    appendTo: contentContainer,
  });

  burgers.forEach((burger) => {
    const burgerContainer = createElement({
      type: 'div',
      attributes: { class: 'burger-container' },
      appendTo: burgersContainer,
    });

    const burgerSvgContainer = createElement({
      type: 'div',
      attributes: { class: 'burger-svg-container flex justify-center' },
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
      attributes: { class: 'burger-info-container flex justify-center' },
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
        attributes: { class: 'burger-ingredients' },
        appendTo: burgerList,
      })
    );
  });
};
