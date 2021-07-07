const projects = {
  projects: [
    {
      link: "https://panugr.github.io/landing-page",
      code: "https://github.com/PanuGr/landing-page",
      title: "Project with a two- column layout.",
      description: "The layout is made with grid, with a 'grid-template-rows: auto 1fr auto;'. The main content is divided in two columns automatically when the screen size is around 600px, using 'grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));'",
    },

  {
    link: "https://panugr.github.io/signup-form",
    code: "https://github.com/PanuGr/signup-form",
    title: "A signup form, build with grid",
    description: "Signup form, build with grid. I use built-in form validation but I've also added validation when typing. For showing errors I use the css selector ':invalid'",
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