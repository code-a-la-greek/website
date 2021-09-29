/* import showProjects from './js/displayProjects';
import showCourses from './js/courses';
import { getData } from './js/projectsAPI'; */

/*  
        getData().then((project) => { showProjects('#about article', project[0]); });
     */
const buttonUp = document.querySelector("button");

// showCourses();
document.querySelector("button").addEventListener('click', () => window.scrollTo(0, 0))
window.addEventListener('scroll', function (e) {
    if (window.scrollY > 400) {
        buttonUp.style.visibility = "visible";
    } else { buttonUp.style.visibility = "hidden"; }
})




//buttonUp.onclick = () => window.scrollTo(0, 0);