//DISPLAY THE PROJECTS
function showProjects(element, number) {
  document.querySelector(`${element} h3`).innerHTML = number.title;
  document.querySelector(`${element} p`).innerHTML = number.info;
  document.querySelector(`${element} a:nth-child(3)`).setAttribute('href', number.website);
  document.querySelector(`${element} a:nth-child(4)`).setAttribute('href', number.github);
  document.querySelector(`${element} a:nth-child(4)`).setAttribute('href', number.github);
  document.querySelector(`${element} img`).setAttribute('src', `${number.image}?tr=w-500`);
}

export default showProjects;