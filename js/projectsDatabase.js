const projects = {
  projects: [
    {
      link: "https://panugr.github.io/article-component/",
      code: "https://github.com/PanuGr/article-component",
      img: "../pictures/screenshot0.webp",
      title: "Article-component",
      description: "An article-card with sharing options",
      info: " Build with html and scss. I've used javascript to toggle the share button."
    },
    {
      link: "https://panugr.github.io/social-proof/",
      code: "https://github.com/PanuGr/social-proof",
      img: "../pictures/screenshot1.webp",
      title: "Social-proof card",
      description: "A social proof-card",
      info: ""
    }
  ]
};

const workProjects = [
  {
    link: "https://panugr.github.io/elisa/",
    description:
      "I created this blog for a friend who likes to write and publish stories and poems.",
    title: "Elisan Antologia",
    info: "The site was made with W3.CSS and handlebars.js",
  },
];

//DISPLAY THE PROJECTS
const projectsDatabase = projects.projects;

function showProjects(element, number) {
  document.querySelector(`${element} h3`).innerHTML = projectsDatabase[number].title;
  document.querySelector(`${element} p`).innerHTML =
    `${projectsDatabase[number].description}. ${projectsDatabase[number].info}`;
  document.querySelector(`${element} a:nth-child(3)`).setAttribute('href', projectsDatabase[number].link);
  document.querySelector(`${element} a:nth-child(4)`).setAttribute('href', projectsDatabase[number].code);
  document.querySelector(`${element} img`).setAttribute('src', projectsDatabase[number].img);
}

export default showProjects;