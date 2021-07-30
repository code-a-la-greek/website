import { getData } from './projectsAPI';


let css = [];
let javascript = [];

if (navigator.connection.effectiveType > "3g") {
    getData().then((project) => {
        for (const key in project) {
            switch (project[key].type) {
                case "css":
                    css.push(project[key]);
                    break;
                case "javascript":
                    javascript.push(project[key]);
                    break;
            }
        }
        showData();
    });
} else { alert('Projects will be displayed as soon as the internet connection improves') }


function showData() {
    for (let i = 0; i < 6; i++) {
        let cssProjects = css[i];
        let javascriptProjects = javascript[i];
        codedSection(cssProjects, '#css');
        codedSection(javascriptProjects, '#javascript');

    };
};

const codedSection = (array, querySelector) => {
    document.querySelector(querySelector).innerHTML += `<div class="project-card">
<div>
    <h3>${array.title}</h3>
    <p>${array.info}</p>
    <a href="${array.website}" class="button button-primary"> PREVIEW SITE </a>
    <a href="${array.github}" class="button"> VIEW CODE </a>
</div>
<img loading=lazy src="${array.image}?tr=w-0.5" width="500" height="500" aria-hidden="true" alt="" />
</div>`};