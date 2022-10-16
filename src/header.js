import { logo } from './assets';
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
    attributes: { class: 'logo', src: logo },
    appendTo: logoContainer,
  });

  return headerElement;
};
