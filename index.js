import { showProjects } from './js/projectsDatabase';
import { goingUp, scrollFunction } from './js/scrollup';
import showCourses from './js/courses'; 
import showChangelog from './js/changelog';
import scrollToLast from './js/scrollToLast';


//SHOW 2 RANDOM PROJECTS
showProjects('#recentProjects',0);
showCourses();
showChangelog();

 
window.onload = () => {
    scrollToLast();
    buttonUp.addEventListener('click', goingUp)
    window.addEventListener('scroll', scrollFunction)
};