//import Handlebars from 'https://cdn.skypack.dev/handlebars?min';

const projects = {
  projects: [
    {
      link: "https://panugr.github.io/rhyme/",
      code: "https://github.com/PanuGr/rhyme",
      img: "../pictures/poem.webp",
      description:
        "Find a word that rhymes or sounds similar with any other given word",
      title: "Write your poem",
      info:
        "In this project, I have been working with fetch-requests to a word database, provided by datamuse.org. I wanted to create a simple app that finds words that rhyme with any given word.",
    },
    {
      link: "../sites/weather/weather.html",
      code: "https://github.com/PanuGr/weather-app",
      img: "../pictures/weather-application.webp",
      description: "Check the weather conditions for any location",
      title: "Weather app",
      info:
        "I have been practising with xhr-requests to a weather API, provided by openweather.org. Dark-mode is based on the device's color preferences.",
    },
    {
      link: "https://panugr.github.io/javascriptGame/",
      code: "https://github.com/PanuGr/javascriptGame",
      img: "../pictures/rock-paper-scissor.webp",
      description:
        "A web-application of the famous game. Play it by yourself or with a friend.",
      title: "Rock-Paper-Scissors",
      info:
        "I've been working with arrow functions and array loops. The project was inspired from an exercise in courses.",
    },
    {
      link: "https://panugr.github.io/mrfunny/",
      code: "https://github.com/PanuGr/mrfunny",
      img: "../pictures/mrfunny.webp",
      description: "A series of small applications",
      title: "Mr.Funny",
      info:
        "This project contains a series of small applications, inspired by exercises during my Javascript lesson. I've been working with alert/confirm functions and array-loops.",
    },
    {
      link: "https://panugr.github.io/Koirakerho/",
      code: "https://github.com/PanuGr/koirakerho",
      img: "../pictures/koirakerho.webp",
      description: "Replicating the landing-page of a local dog-club",
      title: "Vakka-Suomen Kennelkerho",
      info:
        "In this project I replicate a local dog-club. I've been practising with css-frameworks for building the layout and for displaying the gallery. First I used the W3.CSS framework, then i redesigned the site with Bootstrap 5.",
    },
    {
      link: "https://panugr.github.io/Driven/",
      code: "https://github.com/PanuGr/Driven",
      img: "../pictures/driven.webp",
      description: "Replicating the landing-page of a local driving-school",
      title: "Driven Autokoulu",
      info:
        "In this project I replicate a local driving-school. I've been working with the animate.css for the animations. I used flexbox to display the cards and the Handlebars.js template to display the courses.",
    },
    {
      link: "https://panugr.github.io/flipbook-css/",
      code: "https://github.com/PanuGr/flipbook-css",
      img: "../pictures/css-flipbook-small.webp",
      description: "A simple guide to CSS code for beginners",
      title: "Style your Website using this simple guide to CSS!",
      info:
        "This has been one of my first projects. Originally it was just a simple html and css file. Later i turned into  this book-like webpage by using the free version of turn.js library and basic jquery language.",
    },
  ],
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

let num1= Math.round(Math.random()*6)
let num2= Math.round(Math.random()*6)
let num3= Math.round(Math.random()*6)



const random3Projects = [
  projects.projects[num1],
  projects.projects[num2],
  projects.projects[num3],
]; 


for (const projects of random3Projects) {
  document.querySelector("#recentProjects").innerHTML += `
      <section class="w3-third w3-container w3-margin-bottom w3-card w3-white">
              <a href="${projects.link}"><img src=${projects.img} alt="${projects.title}"
                      class="w3-hover-opacity"></a>
              <section class="w3-container">
                  <h3>${projects.title}</h3>
                  <p>${projects.description}</p>
                  <details>
                  <summary>More info</summary>
                  <p>${projects.info}</p>
                  </details>
                  <a href="${projects.code}" target="_blank" rel="noopener noreferrer">See code on Github</a> <i
                  class="w3-small fas fa-external-link-square-alt"></i>
              </section>
              </section>
      `;
}

