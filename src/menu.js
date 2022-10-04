import { basePage } from './basePage.js';

export const createMenuPage = () => {
  const headingText = 'Menu';
  const initialDisplayStyle = 'none';
  const { page, pageContent } = basePage(headingText, initialDisplayStyle);

  return page;
};
