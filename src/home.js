import { basePage } from './basePage.js';

export const createHomePage = () => {
  const headingText = 'A magic factory for healthy food';
  const initialDisplayStyle = 'flex';
  const { page, pageContent } = basePage(headingText, initialDisplayStyle);

  const daysOfWeek = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  const workingHoursContainer = document.createElement('div');
  workingHoursContainer.classList.add('working-hours-container');

  const workingHoursHeadingContainer = document.createElement('div');
  workingHoursHeadingContainer.classList.add('working-hours-heading-container');
  workingHoursContainer.append(workingHoursHeadingContainer);

  const clockIcon = document.createElement('i');
  clockIcon.classList.add('fa-solid', 'fa-clock', 'clock-icon');

  const workingHoursHeadingText = document.createElement('h2');
  workingHoursHeadingText.classList.add('working-hours-heading');
  workingHoursHeadingText.textContent = 'WORKING HOURS';

  workingHoursHeadingContainer.append(workingHoursHeadingText, clockIcon);

  daysOfWeek.forEach((day) => {
    const paragraph = document.createElement('p');
    paragraph.classList.add('working-hours');

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

  pageContent.append(workingHoursContainer);

  return page;
};
