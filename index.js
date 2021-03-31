//import 'w3-css/4/w3pro.css';
import "./index.scss";
import "https://kit.fontawesome.com/a72b9e7ca4.js";
import './js/courses'
import {goingUp,scrollFunction} from './js/scrollup';
import {w3_open, w3_close} from './js/sidebarFunction';
import './js/projectsDatabase'


//SIDEBAR
document.getElementById('myOverlay').addEventListener('click', w3_close)
document.querySelector('#mySidebar > section > a').addEventListener('click', w3_close)
document.querySelector('#mySidebar > div.w3-bar-block > a:nth-child(1)').addEventListener('click', w3_close)
document.querySelector('#mySidebar > div.w3-bar-block > a:nth-child(2)').addEventListener('click', w3_close)
document.querySelector('#mySidebar > div.w3-bar-block > a:nth-child(3)').addEventListener('click', w3_close)
document.querySelector('#mySidebar > div.w3-bar-block > a:nth-child(4)').addEventListener('click', w3_close)
document.querySelector('header>span').addEventListener('click', w3_open)
//BUTTON UP
buttonUp.addEventListener('click',goingUp)
window.addEventListener('scroll',scrollFunction)
//RECENT PROJECTS
//lastprojectsTemplate(); 
