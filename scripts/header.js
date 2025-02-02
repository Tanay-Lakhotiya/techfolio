const headerHTML = `
  <div class="header-left-section">
    <a class="home-page-link" href="index.html">
      <img class="portfolio-logo" src="./images/portfolio-logo.png" alt="">
      tanaylakhotiya.dev
    </a>
    <a class="header-section-link projects-page-link js-projects-link" href="projects.html">Projects</a>
    <a class="header-section-link experience-page-link" href="experience.html">Experience</a>
  </div>
  <div class="header-right-section">
    <a class="header-section-link js-resume-link">Resume</a>
    <a class="header-section-link js-about-link" href="about.html">About</a>
    <a class="header-section-link js-contact-link" href="contact.html">Contact</a>
  </div>
  <button class="header-menu-button js-menu-button">
    <svg class="menu" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style="pointer-events: none; display: inherit; width: 100%; height: 100%;"><path d="M21 6H3V5h18v1zm0 5H3v1h18v-1zm0 6H3v1h18v-1z"></path></svg>
  </button>
`;

document.querySelector('.js-header').innerHTML = headerHTML;

if (document.title.includes('Projects')) {
  document.querySelector('.js-projects-link').classList.add('underline-visible');
} else if (document.title.includes('About')) {
  document.querySelector('.js-about-link').classList.add('underline-visible');
} else if (document.title.includes('Contact')) {
  document.querySelector('.js-contact-link').classList.add('underline-visible');
}

const menuButton = document.querySelector('.js-menu-button');
const headerLinks = document.querySelector('.js-header-links');
let isMenuOpen = false;

menuButton.addEventListener('click', () => {
  isMenuOpen = !isMenuOpen;
  if (isMenuOpen) {
    headerLinks.innerHTML = `
      <a href="projects.html">Projects</a>
      <a href="experience.html">Experience</a>
      <a href="Tanay_CV.pdf" download>Resume</a>
      <a href="about.html">About</a>
      <a href="contact.html">Contact</a>
    `;
  } else {
    headerLinks.innerHTML = '';
  }
});

// Close menu when clicking outside
document.addEventListener('click', (event) => {
  if (isMenuOpen && 
      !headerLinks.contains(event.target) && 
      !menuButton.contains(event.target)) {
    headerLinks.classList.remove('active');
    headerLinks.innerHTML = '';
    isMenuOpen = false;
  }
});

document.querySelector('.js-resume-link').addEventListener('click', (event) => {
  event.preventDefault();
  const link = document.createElement('a');
  link.href = 'Tanay_CV.pdf';
  link.download = 'Tanay_CV.pdf';
  link.click();
});