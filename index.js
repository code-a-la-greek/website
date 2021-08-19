import showProjects from './js/displayProjects';
import { goingUp, scrollFunction } from './js/scrollup';
import showCourses from './js/courses';
import { getData } from './js/projectsAPI';

 if (navigator.connection.effectiveType > "3g") {
        getData().then((project) => { showProjects('#about article', project[0]); });
    }

window.onload = () => {
    showCourses();
    document.querySelector(".buttonUp").addEventListener('click', goingUp)
    window.addEventListener('scroll', scrollFunction)
}