import {getData} from './projectsAPI';


let css = [];
let javascript = [];
let bootstrap = [];

if (navigator.connection.effectiveType >= "3g") {
    getData().then((project) => {
        for (const key in project) {
            switch (project[key].type) {
                case "css":
                    css.push(project[key]);
                    break;
                case "javascript":
                    javascript.push(project[key]);
                    break;
                case "bootstrap":
                    bootstrap.push(project[key]);
                    break;
            }
        }
        showData();
    });
}


function showData() {
    for (let i = 0; i < 4; i++) {
        let cssProjects = css[i];
        let javascriptProjects = javascript[i];
        codedSection(cssProjects, '#css');
        codedSection(javascriptProjects, '#javascript');

    };

    //for some reason the codedsection function doesn't work for bootstrap array. That's why i repeat the loop
    for (let i = 0; i < 4; i++) {
        let bootstrapProjects = bootstrap[i];
        codedSection(bootstrapProjects, '#bootstrap');
    }
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