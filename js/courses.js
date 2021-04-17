import Handlebars from "https://cdn.skypack.dev/handlebars?min";

const coursesList = {
    courses: [
        {
            title: "Web Development",
            info:
                "This course contains a collection of lessons about both front- and back-end development.",
            progress: "In progress: 62%",
            lessons: [
                {
                    title: "HTML",
                    link:
                        "https://www.codecademy.com/profiles/PakisGr/certificates/9eb0741e5ebef1f9f58a53bfac67d3a7",
                },
                {
                    title: "CSS",
                    link:
                        "https://www.codecademy.com/profiles/PakisGr/certificates/9a5bb1fc45b4281af1fffec93b0aaf05",
                },
                {
                    title: "Javascript",
                    link:
                        "https://www.codecademy.com/profiles/PakisGr/certificates/705dcb15de0da4dd9d9fc4f3274b430e",
                },
                {
                    title: "Command Line",
                    link:
                        "https://www.codecademy.com/profiles/PakisGr/certificates/c87ba0541f8be78bc2f4ba1128233f6f",
                },
                {
                    title: "Git",
                    link:
                        "https://www.codecademy.com/profiles/PakisGr/certificates/a8ab218d5950c29861635cc0bf12fd13",
                },
                {
                    title: "Introduction to Node.js",
                    link:
                        "https://www.codecademy.com/profiles/PakisGr/certificates/240305d50b925c17868f1ac7a21a3261",
                },
                {
                    title: "TDD",
                    link:
                        "https://www.codecademy.com/profiles/PakisGr/certificates/f4276e8c08a3ba174ef0147deb0c3013",
                }
            ]
        },
        {
            title: "Front-End Engineer",
            info:
                "This course contains a collection of lessons about front-end development.",
            progress: "In progress: 51%",
            lessons: [
                {
                    title: "HTML",
                    link:
                        "https://www.codecademy.com/profiles/PakisGr/certificates/9eb0741e5ebef1f9f58a53bfac67d3a7",
                },
                {
                    title: "CSS",
                    link:
                        "https://www.codecademy.com/profiles/PakisGr/certificates/9a5bb1fc45b4281af1fffec93b0aaf05",
                },
                {
                    title: "Color Design",
                    link:
                        "https://www.codecademy.com/profiles/PakisGr/certificates/0a6884fad1dbf4afe5df084d2ec1e7c3",
                },
                {
                    title: "Responsive Design",
                    link:
                        "https://www.codecademy.com/profiles/PakisGr/certificates/3a62023b0054dc793edc0adecd715fd7",
                },
                {
                    title: "Javascript",
                    link:
                        "https://www.codecademy.com/profiles/PakisGr/certificates/705dcb15de0da4dd9d9fc4f3274b430e",
                },
                {
                    title: "Javascript Unit Testing (TDD with mocha.js)",
                    link:
                        "https://www.codecademy.com/profiles/PakisGr/certificates/f4276e8c08a3ba174ef0147deb0c3013",
                },
            ]
        }
    ],
    other: [{
        title: "Sass",
        info: "This course contains lessons about Scss syntax, nesting, functions, partials.",
        link:
            "https://www.codecademy.com/profiles/PakisGr/certificates/eb1ffda40f347629dcef6de33d3f9741",
    },
    {
        title: "Wix-Website editor",
        info: "Create a Professional Website with Velo by Wix.",
        link:
            "https://www.codecademy.com/profiles/PakisGr/certificates/9605a581bda107153c433f7889dbc268",
    },]
};

function showCourses() {
    const source = document.getElementById("courses-template").innerHTML;
    const template = Handlebars.compile(source);
    const html = template(coursesList);
    document.querySelector(".w3-ul").innerHTML = html;
}

export default showCourses