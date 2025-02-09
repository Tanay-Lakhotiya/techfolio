import {bajajExperienceList} from '../data/bajajExperienceList.js';
import {calculateMonths} from './utils/util.js';

calculateMonths();

let experinceInfoHTML = '';
bajajExperienceList.forEach((experience) => {
  experinceInfoHTML += `
    <div>
      <p class="designation">${experience.designation}</p>
      <p class="bajaj-position-duration">${experience.designationDuration}</p>
      <ul class="work-points">
        ${experience.workSummary.map((point) => `<li>${point}</li>`).join('')}
      </ul>
    </div>
  `;
});

document.querySelector('.bajaj-experience-info').innerHTML = experinceInfoHTML;