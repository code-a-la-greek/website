
//TOOL-LIST
const source = document.getElementById("tool-template").innerHTML;
const template = Handlebars.compile(source);
const tools = {
    tools: [{
        source: "https://img.shields.io/badge/HTML-5-orange",
        description: "Html-5"
    },
    {
        source: "https://img.shields.io/badge/CSS-3-blue",
        description: "CSS-3"
    },
    {
        source: "https://img.shields.io/badge/Sass-pink",
        description: "Sass-Scss"
    },
    {
        source: "https://img.shields.io/badge/Javascript-yellow",
        description: "javascript"
    },
    {
        source: "https://img.shields.io/badge/Bootstrap-purple",
        description: "Bootstrap library"
    },
    {
        source: "https://img.shields.io/badge/Font-awesome-blue",
        description: "fa-font-awesome library"
    },
    {
        source: "https://img.shields.io/badge/Terminal-Bash-black",
        description: "Bash-terminal"
    },
    {
        source: "https://img.shields.io/badge/Visual Studio-Code-blue",
        description: "Visual Studio Code"
    },
    {
        source: "https://img.shields.io/badge/Github-black",
        description: "Github"
    },
    ]
};
const compiledHtml = template(tools);
const fill = document.getElementById("tool-list");
fill.innerHTML = compiledHtml;
//PROJECT-LIST
const projectList = document.getElementById("project-template").innerHTML;
const projectTemplate = Handlebars.compile(projectList);
const projects = {
    projects: [
        {
            link: 'https://panugr.github.io/flipbook-HTML/',
            description: "A simple guide to HTML code for beginners",
            title: 'Build Your Website using this simple guide to HTML!',
            info: "This book-like webpage is created by using the free version of turn.js library and basic jquery language."
        },
        {
            link: 'https://panugr.github.io/flipbook-css',
            description: "A simple guide to CSS code for beginners",
            title: 'Style your Website using this simple guide to CSS!',
            info: "This book-like webpage is created by using the free version of turn.js library and basic jquery language."
        },
        {
            link: 'https://panugr.github.io/desmon-art/',
            description: "Example of a landing page for a craft's store",
            title: "Welcome to Desmon's Arts & Crafts!",
            info: " In this project, I work with the video-tag and flexbox techniques. I used cards from W3.CSS framework first, then switched to Bootstrap 5. The products are displayed with the Handlebars.js."
        },
        {
            link: 'https://panugr.github.io/Driven/',
            description: "Replicating the landing-page of a local driving-school",
            title: "Driven Autokoulu",
            info: "In this project I worked with the animate.css for the animations. I used flexbox to display the cards and the Handlebars.js template to display the courses."
        },
        {
            link: 'https://panugr.github.io/Koirakerho/',
            description: "Replicating the landing-page of a local dog-club",
            title: "Vakka-Suomen Kennelkerho",
            info: "In this project I've been practising with css-frameworks. First I used the W3.CSS framework, then i redesigned the site with Bootstrap 5."
        },
        {
            link: 'https://panugr.github.io/mrfunny/',
            description: "A series of small applications",
            title: "Mr.Funny",
            info: "I've been working with alert/confirm functions and array-loops. Lodash.js-library simplifies the arithmetic operators."
        },
        {
            link: 'https://panugr.github.io/javascriptGame/',
            description: "A web-application of the famous game. Play it by yourself or with a friend.",
            title: "Rock-Paper-Scissors",
            info: "I've been working with arrow functions and array loops. Lodash.js-library simplifies the arithmetic operators."
        },
        {
            link: '/Sites/weather.html',
            description: "Check the weather conditions for any location",
            title: "Weather app",
            info: "I have been working with xhr-requests to a weather API, provided by openweather.org. Dark-mode is based on the device's color preferences."
        },
        {
            link: 'https://panugr.github.io/writepoem/',
            description: "Find a word that rhymes or sounds similar with any other given word",
            title: "Write your poem",
            info: "Fetch-requests to a word database, provided by datamuse.org."
        },
        {
            link: 'https://panugr.github.io/elisa/',
            description: "I created this blog for a friend who likes to write and publish stories and poems.",
            title: "Elisan Antologia",
            info: "The site was made with W3.CSS and handlebars.js"
        },
    ]
};
const compiledProjects = projectTemplate(projects);
const fillProjects = document.getElementById("project-list");
fillProjects.innerHTML = compiledProjects;
