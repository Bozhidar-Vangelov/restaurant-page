import { basePage } from './basePage.js';

export const createMenuPage = () => {
  const headingText = 'Menu';
  const initialDisplayStyle = 'none';
  const menuPage = basePage(headingText, initialDisplayStyle);

  return menuPage;
};
