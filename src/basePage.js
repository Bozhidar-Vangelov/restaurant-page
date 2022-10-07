import { createElement } from './utils.js';

export const basePage = (headingText, display) => {
  // const page = createElement({
  //   type: 'div',
  //   styles: { 'min-width': '70%', display },
  //   attributes: { class: 'page' },
  //   appendTo: '.page-container',
  // });

  // createElement({
  //   type: 'h1',
  //   props: { textContent: headingText },
  //   appendTo: '.page',
  // });

  return { page };
};

// export const basePage = (headingText, display) => {
//   const page = document.createElement('div');
//   page.style.minWidth = '70%';

//   page.style.display = display;
//   page.classList.add('page');

//   const heading = document.createElement('h1');
//   heading.textContent = headingText;
//   page.append(heading);

//   const pageContent = document.createElement('div');
//   pageContent.classList.add('page-content');

//   page.append(pageContent);

//   return { page, pageContent };
// };
