import '../scss/style.scss';
import showChangelog from './changelog';
import scrollToLast from './scrollToLast';
import showCourses from './courses';
import { showProjects } from './projectsDatabase';
import { goingUp, scrollFunction } from './scrollup';

//SHOW 2 RANDOM PROJECTS
showProjects()
//BUTTON UP
buttonUp.addEventListener('click', goingUp)
window.addEventListener('scroll', scrollFunction)
//SCRIPT OF COMPLETED COURSES AND CHANGELOG
showChangelog()
scrollToLast()
showCourses()
