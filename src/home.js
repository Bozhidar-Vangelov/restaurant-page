import { basePage } from './basePage.js';
import { createElement, daysOfWeek } from './utils.js';

export const createHomePage = (pageContainer) => {
  const headingText = 'A magic factory for healthy food';
  const initialDisplayStyle = 'flex';
  // const { page } = basePage(headingText, initialDisplayStyle);

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
    const paragraph = createElement({
      type: 'h2',
      attributes: { class: 'working-hours' },
      appendTo: workingHoursContainer,
    });

    switch (day) {
      case 'Thursday':
      case 'Friday':
        paragraph.textContent = `${day}: 11:00AM - 12:00PM`;
        break;
      case 'Saturday':
      case 'Sunday':
        paragraph.textContent = `${day}: 14:00PM - 02:00AM`;
        break;
      default:
        paragraph.textContent = `${day}: 11:00AM - 10:00PM`;
    }

    workingHoursContainer.append(paragraph);
  });

  return page;
};
