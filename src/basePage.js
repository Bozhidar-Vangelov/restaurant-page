export const basePage = (headingText, display) => {
  const page = document.createElement('div');
  page.style.width = '70%';

  page.style.display = display;
  page.classList.add('page');

  const heading = document.createElement('h1');
  heading.textContent = headingText;
  page.append(heading);

  const pageContent = document.createElement('div');
  pageContent.textContent =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quos temporibus aperiam accusamus provident cumque corrupti, eius quidem. Reprehenderit repudiandae culpa tempore iusto alias laboriosam consectetur, officia saepe tempora quos?';

  page.append(pageContent);

  return page;
};
