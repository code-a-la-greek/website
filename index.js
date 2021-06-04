import { showProjects } from './js/projectsDatabase';
import { goingUp, scrollFunction } from './js/scrollup';
import showCourses from './js/courses';
import showChangelog from './js/changelog';
import scrollToLast from './js/scrollToLast';

showProjects('#recentProjects', 0);

window.onload = () => {
    showCourses();
    showChangelog();
    document.getElementsByTagName('a')[8].addEventListener('click', scrollToLast)
    buttonUp.addEventListener('click', goingUp)
    window.addEventListener('scroll', scrollFunction)
    showProjects('#about article', 1);
}