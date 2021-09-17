import showProjects from './displayProjects';
import { goingUp, scrollFunction } from './scrollup';
import showCourses from './courses';
import { getData } from './projectsAPI';

/*  if (navigator.connection.effectiveType > "3g") {
        getData().then((project) => { showProjects('#about article', project[0]); });
    } */

window.onload = () => {
   // showCourses();
    document.querySelector(".buttonUp").addEventListener('click', goingUp)
    window.addEventListener('scroll', scrollFunction)
}