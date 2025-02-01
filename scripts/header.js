const headerHTML = `
  <div class="header-left-section">
    <a class="home-page-link" href="index.html">
      <img class="portfolio-logo" src="./images/portfolio-logo.png" alt="">
      tanaylakhotiya.dev
    </a>
    <a class="header-section-link projects-page-link" href="project.html">Projects</a>
    <a class="header-section-link experience-page-link" href="experience.html">Experience</a>
  </div>
  <div class="header-right-section">
    <a class="header-section-link js-resume-link">Resume</a>
    <a class="header-section-link js-about-link" href="about.html">About</a>
    <a class="header-section-link">Contact</a>
  </div>
  <button class="header-menu-button js-menu-button">
    <svg class="menu" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style="pointer-events: none; display: inherit; width: 100%; height: 100%;"><path d="M21 6H3V5h18v1zm0 5H3v1h18v-1zm0 6H3v1h18v-1z"></path></svg>
  </button>
`;

document.querySelector('.js-header').innerHTML = headerHTML;

if (document.title.includes('About')) {
  document.querySelector('.js-about-link').classList.add('underline-visible');
}

document.querySelector('.js-menu-button')
  .addEventListener('click', () => {
    const divLinksContainer = document.querySelector('.js-header-links');

    let headerLinksHTML = '';
    if (divLinksContainer.hasChildNodes()) {
      headerLinksHTML += '';
    } else {
      headerLinksHTML += `
        <a>Projects</a>
        <a>Experience</a>
        <a class="header-section-link js-resume-link" href="Tanay_CV.pdf" download="Tanay_CV.pdf">Resume</a>
        <a class="header-section-link js-about-link" href="about.html">About</a>
        <a>Contact</a>
      `;
    }

    divLinksContainer.innerHTML = headerLinksHTML;
  });

document.querySelector('.js-resume-link').addEventListener('click', (event) => {
  event.preventDefault();
  const link = document.createElement('a');
  link.href = 'Tanay_CV.pdf';
  link.download = 'Tanay_CV.pdf';
  link.click();
});