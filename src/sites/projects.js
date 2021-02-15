import 'w3-css/w3.css';
import '../global-styles.scss';
import "./projects.scss";
import {projects} from '../projectsDatabase'

const Handlebars = window.Handlebars;
const projectList = document.querySelector("#project-template").innerHTML;
const projectTemplate = Handlebars.compile(projectList);
const compiledProjects = projectTemplate(projects);
const fillProjects = document.querySelector('main');
fillProjects.innerHTML = compiledProjects;