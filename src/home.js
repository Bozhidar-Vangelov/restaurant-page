import { createElement, createContainers } from './utils.js';

const daysOfWeek = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

const containersData = [
  {
    iconClass: 'fa-solid fa-clock heading-icon',
    textContent: 'WORKING HOURS',
  },
  {
    iconClass: 'fa-solid fa-circle-info heading-icon',
    textContent: 'ABOUT US',
  },
];

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

  const [workingHoursContainer, aboutUsContainer] = createContainers(
    pageContent,
    containersData
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
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quas cumque enim sapiente ullam ea quidem autem eum ipsum, laborum accusamus perferendis explicabo totam laudantium. Sint excepturi delectus voluptate asperiores.',
    },
    appendTo: aboutUsContainer,
  });

  createElement({
    type: 'img',
    attributes: { class: 'content-img', src: '../src/images/home-burger.svg' },
    appendTo: aboutUsContainer,
  });

  createElement({
    type: 'img',
    attributes: {
      class: 'content-img',
      src: '../src/images/home-french-fries.svg',
    },
    appendTo: aboutUsContainer,
  });
};
