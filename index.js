import showProjects from './js/projectsDatabase';
import { goingUp, scrollFunction } from './js/scrollup';
import showCourses from './js/courses';

showProjects('.flexbox', 0);
window.onload = () => {
    showProjects('#about article', 1);
    showCourses();
    document.querySelector(".buttonUp").addEventListener('click', goingUp)
    window.addEventListener('scroll', scrollFunction)
}