import { createElement } from './utils.js';

export const createHeader = (contentDiv) => {
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

  return headerElement;
};
