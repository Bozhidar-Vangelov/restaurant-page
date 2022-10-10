import { createElement, createContainers } from './utils.js';
import { homeContainersData, daysOfWeek } from './data.js';

export const createHomePage = (pageContainer) => {
  const headingText = 'A magic factory for healthy food';

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
    attributes: { class: 'page-content' },
    appendTo: page,
  });

  const [workingHoursContainer, aboutUsContainer] = createContainers(
    pageContent,
    homeContainersData
  );

  createWorkingHours(workingHoursContainer);
  createAboutUs(aboutUsContainer);

  return page;
};

const createWorkingHours = (workingHoursContainer) => {
  daysOfWeek.forEach((day) => {
    const headingText = createElement({
      type: 'h2',
      attributes: { class: 'content' },
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
};

const createAboutUs = (aboutUsContainer) => {
  createElement({
    type: 'h2',
    attributes: { class: 'about-us' },
    props: {
      textContent:
        "There is something magical here. This is Virgo's restaurant located in Burgtown. Every day many people come to this suburban street to support an idea, that in order to move forward it is sometimes necessary to look back. This is why our burgers are entirely home made.",
    },
    appendTo: aboutUsContainer,
  });

  createElement({
    type: 'img',
    attributes: { class: 'content-img', src: '../src/images/home-burger.png' },
    appendTo: aboutUsContainer,
  });

  createElement({
    type: 'img',
    attributes: {
      class: 'content-img',
      src: '../src/images/home-french-fries.png',
    },
    appendTo: aboutUsContainer,
  });
};
