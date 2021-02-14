import 'w3-css/w3.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./css/index.scss";
import {lastprojectsTemplate} from './projectsDatabase';
lastprojectsTemplate(); 

console.log('testing for secrets');
console.log(process.env.TEST);