import * as poem from "./assets/poem.webp";
import * as rockPaper from "./assets/rock-paper-scissor.webp";
import * as weather from "./assets/weather-application.webp";
import * as flipbook from "./assets/css-flipbook-small.webp";
import * as driven from "./assets/driven.webp";
import * as koirakerho from "./assets/koirakerho.webp";
import * as mrfunny from "./assets/mrfunny.webp";

const projects = {
    projects:[
    {
        link: "https://panugr.github.io/writepoem/",
        code: "https://github.com/PanuGr/writepoem",
        img: poem.default,
        description:
            "Find a word that rhymes or sounds similar with any other given word",
        title: "Write your poem",
        info: "In this project, I have been working with fetch-requests to a word database, provided by datamuse.org. I wanted to create a simple app that finds words that rhyme with any given word.",
    },
    {
        link: "https://weather-desktop-application.netlify.app/",
        code: null,
        img: weather.default,
        description: "Check the weather conditions for any location",
        title: "Weather app",
        info:
            "I have been practising with xhr-requests to a weather API, provided by openweather.org. Dark-mode is based on the device's color preferences.",
    },
    {
        link: "https://panugr.github.io/javascriptGame/",
        code: "https://github.com/PanuGr/javascriptGame",
        img: rockPaper.default,
        description:
            "A web-application of the famous game. Play it by yourself or with a friend.",
        title: "Rock-Paper-Scissors",
        info:
            "I've been working with arrow functions and array loops. Lodash.js-library simplifies the arithmetic operators. The project was inspired from an exercise in courses.",
    },
    {
        link: "https://panugr.github.io/mrfunny/",
        code: "https://github.com/PanuGr/mrfunny",
        img:mrfunny.default,
        description: "A series of small applications",
        title: "Mr.Funny",
        info:
            "This project contains a series of small applications, inspired by exercises during my Javascript lesson. I've been working with alert/confirm functions and array-loops. Lodash.js-library simplifies the arithmetic operators.",
    },
    {
        link: "https://panugr.github.io/Koirakerho/",
        code: "https://github.com/PanuGr/koirakerho",
        img:koirakerho.default,
        description: "Replicating the landing-page of a local dog-club",
        title: "Vakka-Suomen Kennelkerho",
        info:
            "In this project I replicate a local dog-club. I've been practising with css-frameworks for building the layout and for displaying the gallery. First I used the W3.CSS framework, then i redesigned the site with Bootstrap 5.",
    },
    {
        link: "https://panugr.github.io/Driven/",
        code: "https://github.com/PanuGr/Driven",
        img:driven.default,
        description: "Replicating the landing-page of a local driving-school",
        title: "Driven Autokoulu",
        info:
            "In this project I replicate a local driving-school. I've been working with the animate.css for the animations. I used flexbox to display the cards and the Handlebars.js template to display the courses.",
    },
    {
        link: "https://panugr.github.io/flipbook-css",
        code: "https://github.com/PanuGr/flipbook-css",
        img:flipbook.default,
        description: "A simple guide to CSS code for beginners",
        title: "Style your Website using this simple guide to CSS!",
        info:
            "This has been one of my first projects. Originally it was just a simple html and css file. Later i turned into  this book-like webpage by using the free version of turn.js library and basic jquery language.",
    },
]};

const workProjects = [
    {
        link: "https://panugr.github.io/elisa/",
        description:
            "I created this blog for a friend who likes to write and publish stories and poems.",
        title: "Elisan Antologia",
        info: "The site was made with W3.CSS and handlebars.js",
    },
];

const last3Projects = [
    projects.projects[0],
    projects.projects[1],
    projects.projects[2],
];

function lastprojectsTemplate() {
    for (let i = 0; i < last3Projects.length; i++) {
        document.querySelector("#projects").innerHTML += `
    <section class="w3-third w3-container ">
      <h2>${last3Projects[i].title}</h2>
      <img class="w3-image" src=${last3Projects[i].img} width="300" height="150"
        alt="screenshot from the site">
      <a href=${last3Projects[i].link}>See live</a>
      <a href=${last3Projects[i].code}>See code</a>
      <p>${last3Projects[i].info}</p>
      <a href="sites/projects.html" class="w3-large">Read more...</a>
    </section>
    `;
    }
}


export { lastprojectsTemplate, projects };
