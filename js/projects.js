import 'w3-css/4/w3pro.css';
import "../css/projects.scss";
import Handlebars from 'https://cdn.skypack.dev/handlebars?min';
import {projects} from '../js/projectsDatabase'

//const Handlebars = window.Handlebars;
const projectList = document.querySelector("#project-template").innerHTML;
const projectTemplate = Handlebars.compile(projectList);
const compiledProjects = projectTemplate(projects);
const fillProjects = document.querySelector('main');
fillProjects.innerHTML = compiledProjects;