import { createElement } from './utils.js';

export const createHeader = (contentDiv) => {
  const headerElement = createElement({
    type: 'header',
    attributes: { id: 'header' },
    appendTo: contentDiv,
  });

  const logoContainer = createElement({
    type: 'div',
    attributes: { class: 'logo-container flex justify-center' },
    appendTo: headerElement,
  });

  createElement({
    type: 'img',
    attributes: { class: 'logo', src: '../src/assets/logo.png' },
    appendTo: logoContainer,
  });

  return headerElement;
};