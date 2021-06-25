const projects = {
  projects: [
    {
      link: "https://panugr.github.io/coming-soon",
      code: "https://github.com/PanuGr/coming-soon",
      title: "Coming-soon page",
      description: "I made the layout with css grid and I've used custom form validation",
    },
    
    {
      link: "https://panugr.github.io/four-cards",
      code: "https://github.com/PanuGr/four-cards",
      title: "4-cards grid",
      description: "A section with 4 cards, build with CSS Grid",
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
    `${projectsDatabase[number].description}`;
  document.querySelector(`${element} a:nth-child(3)`).setAttribute('href', projectsDatabase[number].link);
  document.querySelector(`${element} a:nth-child(4)`).setAttribute('href', projectsDatabase[number].code);
}

export default showProjects;