export const basePage = (headingText, display) => {
  const page = document.createElement('div');
  page.style.minWidth = '70%';

  page.style.display = display;
  page.classList.add('page');

  const heading = document.createElement('h1');
  heading.textContent = headingText;
  page.append(heading);

  const pageContent = document.createElement('div');
  pageContent.classList.add('page-content');

  page.append(pageContent);

  return { page, pageContent };
};
