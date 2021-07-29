//Displaying the FIRST project
const latestProject = {
  title: 'Project with a two- column layout',
  info: 'The layout is made with grid, with a grid-template-rows: auto 1fr auto;. The main content is divided in two columns automatically when the screen size is around 600px, using grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));',
  website: 'https://panugr.github.io/landing-page/',
  github: 'https://github.com/PanuGr/landing-page',
  image: 'https://ik.imagekit.io/panugr/ProjectsDatabase/huddle-landing-page.jpg'
}

//DISPLAY THE PROJECTS
showProjects('.flexbox',latestProject);

function showProjects(element, number) {
  document.querySelector(`${element} h3`).innerHTML = number.title;
  document.querySelector(`${element} p`).innerHTML = number.info;
  document.querySelector(`${element} a:nth-child(3)`).setAttribute('href', number.website);
  document.querySelector(`${element} a:nth-child(4)`).setAttribute('href', number.github);
  document.querySelector(`${element} a:nth-child(4)`).setAttribute('href', number.github);
  document.querySelector(`${element} img`).setAttribute('src', `${number.image}?tr=w-500`);
}

export default showProjects;