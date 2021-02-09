import * as poem from "./assets/poem.webp";
import * as rockPaper from "./assets/rock-paper-scissor.webp";
import * as weather from "./assets/weather-application.webp";

const projects = [
    {
        link: "https://panugr.github.io/flipbook-HTML/",
        description: "A simple guide to HTML code for beginners",
        title: "Build Your Website using this simple guide to HTML!",
        info:
            "This book-like webpage is created by using the free version of turn.js library and basic jquery language.",
    },
    {
        link: "https://panugr.github.io/flipbook-css",
        description: "A simple guide to CSS code for beginners",
        title: "Style your Website using this simple guide to CSS!",
        info:
            "This book-like webpage is created by using the free version of turn.js library and basic jquery language.",
    },
    {
        link: "https://panugr.github.io/desmon-art/",
        description: "Example of a landing page for a craft's store",
        title: "Welcome to Desmon's Arts & Crafts!",
        info:
            " In this project, I work with the video-tag and flexbox techniques. I used cards from W3.CSS framework first, then switched to Bootstrap 5. The products are displayed with the Handlebars.js.",
    },
    {
        link: "https://panugr.github.io/Driven/",
        description: "Replicating the landing-page of a local driving-school",
        title: "Driven Autokoulu",
        info:
            "In this project I worked with the animate.css for the animations. I used flexbox to display the cards and the Handlebars.js template to display the courses.",
    },
    {
        link: "https://panugr.github.io/Koirakerho/",
        description: "Replicating the landing-page of a local dog-club",
        title: "Vakka-Suomen Kennelkerho",
        info:
            "In this project I've been practising with css-frameworks. First I used the W3.CSS framework, then i redesigned the site with Bootstrap 5.",
    },
    {
        link: "https://panugr.github.io/mrfunny/",
        description: "A series of small applications",
        title: "Mr.Funny",
        info:
            "I've been working with alert/confirm functions and array-loops. Lodash.js-library simplifies the arithmetic operators.",
    },
    {
        link: "https://panugr.github.io/javascriptGame/",
        code: "https://github.com/PanuGr/javascriptGame",
        img: rockPaper.default,
        description:
            "A web-application of the famous game. Play it by yourself or with a friend.",
        title: "Rock-Paper-Scissors",
        info:
            "I've been working with arrow functions and array loops. Lodash.js-library simplifies the arithmetic operators.",
    },
    {
        link: "/Sites/weather.html",
        code: null,
        img: weather.default,
        description: "Check the weather conditions for any location",
        title: "Weather app",
        info:
            "I have been working with xhr-requests to a weather API, provided by openweather.org. Dark-mode is based on the device's color preferences.",
    },
    {
        link: "https://panugr.github.io/writepoem/",
        code: "https://github.com/PanuGr/writepoem",
        img: poem.default,
        description:
            "Find a word that rhymes or sounds similar with any other given word",
        title: "Write your poem",
        info: "Fetch-requests to a word database, provided by datamuse.org.",
    },
];

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
    projects[projects.length - 1],
    projects[projects.length - 2],
    projects[projects.length - 3],
];


function lastprojectsTemplate() {
    for (let i = 0; i < last3Projects.length; i++) {
        document.querySelector("#projects").innerHTML += `
    <section class="w3-third w3-container ">
      <h2>${last3Projects[i].title}</h2>
      <img class="w3-image" src=${last3Projects[i].img} width="300" height="150"
        alt="screenshot from the site: a form that finds words that rhyme">
      <a href=${last3Projects[i].link}>See live</a>
      <a href=${last3Projects[i].code}>See code</a>
      <p>${last3Projects[i].description}.<a href="" class="w3-large w3-disabled">Read more...</a></p>
    </section>
    `;
    }
}


export default lastprojectsTemplate;
