import { createElement, daysOfWeek } from './utils.js';

export const createHomePage = (pageContainer) => {
  const headingText = 'A magic factory for healthy food';
  const initialDisplayStyle = 'flex';

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
    attributes: { class: 'working-hours-container' },
    appendTo: pageContent,
  });

  const workingHoursHeadingContainer = createElement({
    type: 'div',
    attributes: { class: 'working-hours-heading-container' },
    appendTo: workingHoursContainer,
  });

  createElement({
    type: 'i',
    attributes: { class: 'fa-solid fa-clock clock-icon' },
    appendTo: workingHoursHeadingContainer,
  });

  createElement({
    type: 'h2',
    props: { textContent: 'WORKING HOURS' },

    attributes: { class: 'working-hours-heading' },
    appendTo: workingHoursHeadingContainer,
  });

  daysOfWeek.forEach((day) => {
    const headingText = createElement({
      type: 'h2',
      attributes: { class: 'working-hours' },
      appendTo: workingHoursContainer,
    });

    switch (day) {
      case 'Thursday':
      case 'Friday':
        headingText.textContent = `${day}: 11:00AM - 12:00PM`;
        break;
      case 'Saturday':
      case 'Sunday':
        headingText.textContent = `${day}: 14:00PM - 02:00AM`;
        break;
      default:
        headingText.textContent = `${day}: 11:00AM - 10:00PM`;
    }

    workingHoursContainer.append(headingText);
  });

  const aboutUsContainer = createElement({
    type: 'div',
    attributes: { class: 'about-us-container' },
    appendTo: pageContent,
  });

  const aboutUsHeadingContainer = createElement({
    type: 'div',
    attributes: { class: 'about-us-heading-container' },
    appendTo: aboutUsContainer,
  });

  createElement({
    type: 'i',
    attributes: { class: 'fa-solid fa-circle-info info-icon' },
    appendTo: aboutUsHeadingContainer,
  });

  createElement({
    type: 'h2',
    props: { textContent: 'ABOUT US' },
    attributes: { class: 'about-us-heading' },
    appendTo: aboutUsHeadingContainer,
  });

  createElement({
    type: 'h2',
    attributes: { class: 'about-us' },
    props: {
      textContent:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quas cumque enim sapiente ullam ea quidem autem eum ipsum, laborum accusamus perferendis explicabo totam laudantium. Sint excepturi delectus voluptate asperiores.',
    },
    appendTo: aboutUsContainer,
  });

  createElement({
    type: 'img',
    attributes: { class: 'about-us-img', src: '../src/images/home-burger.svg' },
    appendTo: aboutUsContainer,
  });

  createElement({
    type: 'img',
    attributes: {
      class: 'about-us-img',
      src: '../src/images/home-french-fries.svg',
    },
    appendTo: aboutUsContainer,
  });

  return page;
};
