import showProjects from './js/projectsDatabase';
import { goingUp, scrollFunction } from './js/scrollup';
import showCourses from './js/courses';
import scrollToLast from './js/scrollToLast';

showProjects('#recentProjects', 0);

window.onload = () => {
    showProjects('#about article', 1);
    showCourses();
    document.getElementsByTagName('a')[9].addEventListener('click', scrollToLast)
    buttonUp.addEventListener('click', goingUp)
    window.addEventListener('scroll', scrollFunction)

}