import { basePage } from './basePage.js';

export const createContactsPage = () => {
  const headingText = 'Contacts';
  const initialDisplayStyle = 'none';
  const { page, pageContent } = basePage(headingText, initialDisplayStyle);

  return page;
};
