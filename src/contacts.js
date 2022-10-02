import { basePage } from './basePage.js';

export const createContactsPage = () => {
  const headingText = 'Contacts';
  const initialDisplayStyle = 'none';
  const contactsPage = basePage(headingText, initialDisplayStyle);

  return contactsPage;
};
