const coursesList =
    [
        {
            title: "Web Development",
            info: "This course begins with the basics of HTML but progresses quickly through CSS, JavaScript, and React.",
            progress: "30 weeks to complete. In progress: 62%"
        },
        {
            title: "Front-End Engineer",
            info: "Front-end engineers work closely with designers to make websites beautiful, functional, and fast.",
            progress: "350hrs to complete. In progress: 51%"
        },
        {
            title: "Wix-Website editor",
            info: "Create a Professional Website with Velo by Wix.",
            progress: "20hrs course. Completed",
            link: "https://www.codecademy.com/profiles/PakisGr/certificates/9605a581bda107153c433f7889dbc268"
        },
        {
            title: "Javascript",
            info: "Syntax, interactive websites, asynchronous javascript, TDD and more.",
            progress: "36hrs course. Completed",
            link: "https://www.codecademy.com/profiles/PakisGr/certificates/705dcb15de0da4dd9d9fc4f3274b430e"
        },
        {
            title: "Sass",
            info: "Scss syntax, nesting, functions, partials.",
            progress: "7hrs course. Completed",
            link: "https://www.codecademy.com/profiles/PakisGr/certificates/eb1ffda40f347629dcef6de33d3f9741"
        },
        
    ];

function displayCourses() {

    coursesList.forEach(courses => {
        document.querySelector('.w3-ul').innerHTML += `
         <li>
         <h5>${courses.title}</h5>
         <p>${courses.info}</p>
         <a href=${courses.link}
         target="_blank" class="w3-small" rel="noopener noreferrer">${courses.progress}</a> <i
         class="w3-small fas fa-external-link-square-alt"></i>
         </li>
         `
    });

}

export default displayCourses;