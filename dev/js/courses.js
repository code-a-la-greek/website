import Handlebars from "https://cdn.skypack.dev/handlebars?min";

const coursesList = {
    courses: [
        {
            title: "Web Development",
            info:
                "This course contains lessons about both front- and back-end development. It begins with the basics, HTML-CSS-Javascript and it progresses quickly through React, back-end Javascript, SQL and Test-Driven-Development.",
            progress: "In progress: 62%"
        },
        {
            title: "Front-End Engineer",
            info:
                "This course focuses on front-end development, from languages like HTML, CSS, and JavaScript, to frameworks like React and Redux, to interview skills, like whiteboarding and data structures.",
            progress: "In progress: 51%"
        },
        {
            title: "Sass",
            info:"This course contains lessons about Scss syntax, nesting, functions, partials.",
            progress:"<a style='text-decoration:underline' href='https://www.codecademy.com/profiles/PakisGr/certificates/eb1ffda40f347629dcef6de33d3f9741' target='_blank' rel='noopener'>Certificate of completion</a>"
        }
    ]
};

function showCourses() {
    const source = document.getElementById("courses-template").innerHTML;
    const template = Handlebars.compile(source);
    const html = template(coursesList);
    document.querySelector("#courses").innerHTML = html;
}

export default showCourses