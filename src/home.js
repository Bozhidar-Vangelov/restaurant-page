import { basePage } from './basePage.js';

export const createHomePage = () => {
  const headingText = 'A magic factory for healthy food';
  const initialDisplayStyle = 'flex';
  const homePage = basePage(headingText, initialDisplayStyle);

  return homePage;
};
