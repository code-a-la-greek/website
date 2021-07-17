import showProjects from './js/projectsDatabase';
import { goingUp, scrollFunction } from './js/scrollup';
import showCourses from './js/courses';
import '/js/darkMode.js';

showProjects('.projects', 0);

window.onload = () => {
    showProjects('#about article', 1);
    showCourses();
    buttonUp.addEventListener('click', goingUp)
    window.addEventListener('scroll', scrollFunction)
}