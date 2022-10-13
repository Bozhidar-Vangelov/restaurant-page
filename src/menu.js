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
    attributes: { class: 'flex justify-center' },
    appendTo: page,
  });

  const [contentContainer] = createContainers(pageContent, menuContainersData);

  createBurgers(contentContainer, burgers);

  return page;
};

const createBurgers = (contentContainer, burgers) => {
  const burgersContainer = createElement({
    type: 'div',
    attributes: { class: 'burgers-container flex' },
    appendTo: contentContainer,
  });

  const firstColContainer = createElement({
    type: 'div',
    attributes: { class: 'flex' },
    appendTo: burgersContainer,
  });

  const secondColContainer = createElement({
    type: 'div',
    attributes: { class: 'flex' },
    appendTo: burgersContainer,
  });

  const thirdColContainer = createElement({
    type: 'div',
    attributes: { class: 'flex' },
    appendTo: burgersContainer,
  });

  let count = 0;

  burgers.forEach((burger) => {
    let targetedContainer = undefined;

    switch (count) {
      case 0:
        targetedContainer = firstColContainer;
        break;
      case 1:
        targetedContainer = secondColContainer;
        break;
      case 2:
        targetedContainer = thirdColContainer;
    }

    if (count === 2) {
      count = 0;
    } else {
      count++;
    }

    const burgerContainer = createElement({
      type: 'div',
      attributes: { class: 'burger-container flex' },
      appendTo: targetedContainer,
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
