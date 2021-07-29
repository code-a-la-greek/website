import showProjects from './js/displayProjects';
import { goingUp, scrollFunction } from './js/scrollup';
import showCourses from './js/courses';
import { getData } from './js/projectsAPI';

window.onload = () => {
    if (navigator.connection.effectiveType > "3g") {
        getData().then((project) => { showProjects('#about article', project[1]); });
    }
    showCourses();
    document.querySelector(".buttonUp").addEventListener('click', goingUp)
    window.addEventListener('scroll', scrollFunction)

}