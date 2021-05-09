import Handlebars from "https://cdn.skypack.dev/handlebars?min";

const changelog = {
    month: [
        {
            date: '16.03.2021',
            updates: [
                { value: 'Changelog-page added. Readme.md file added (for github repository)' }, { value: 'Project files were removed from source folder. Each project has its own different repository on Github' }]
        },
        {
            date: '19.03.2021',
            updates: [
                { value: " I've been working on <a href='https://github.com/PanuGr/mrfunny' title='open in github' rel='noreferrer' target='_blank'>Mr.Funny</a> <i class='w3-small fas fa-external-link-square-alt'></i>, a collection of small applications and calculators" },
                {
                    value: ' Removed Lodash.js library. Arrays and functions were refactored using native javascript'
                },
                { value: "Calculators spread into different files were brought together in one javascript file" },
                { value: "Named functions converted into variables" },
                { value: "I wrote my first test(TDD) with mocha.js for couple of Mr.Funny's functions. Running the test I was surprised to see that my functions could actually be reformed in a better way!" }
            ]
        },
        {
            date: '23.03.2021',
            updates: [
                {
                    value: "Lodash.js library was removed from the <a href='https://github.com/PanuGr/javascriptGame' title='open in github' rel='noreferrer' target='_blank'>Rock-paper project</a> <i class='w3-small fas fa-external-link-square-alt'></i>, a website where you can play the game"
                },
                { value: "For-loops were removed in favor of the shorter and more readable <code>for...of</code> loop" }]
        },
        {
            date: '24.03.2021',
            updates: [
                { value: " I added a TDD testing using the cypress.io framework on my <a href='https://github.com/PanuGr/rhyme' title='open in github' rel='noreferrer' target='_blank'>Poem-writer</a> <i class='w3-small fas fa-external-link-square-alt'></i> application" }]
        },
        {
            date: '08.04.2021',
            updates: [
                { value: " I use the w3.CSS framework from npm and I noticed that npm serves the old version. Now, I am serving the newer version" },
                { value: " All handlebars logic is exported as functions instead of importing the whole javascript file" }
            ]
        },
        {
            date: '20.04.2021',
            updates: [
                { value: " Fixed the link to my <a href='https://getforecast.netlify.app' rel='noreferrer' target='_blank'>weather</a> <i class='w3-small fas fa-external-link-square-alt'></i> application" },
                { value: "Deprecated @import statements in my Sass files were replaced by @use and @forward " }]
        },
        {
            date: '09.05.2021',
            updates: [
                { value: "I am starting a series of Front-end challenges from the Frontend Mentor so I can practice and improve. The first challenge is this <a href='https://github.com/PanuGr/stats-preview-card' title='open in github' rel='noreferrer' target='_blank'>card component</a> <i class='w3-small fas fa-external-link-square-alt'></i>" }]
        }
    ]
}



function showChangelog() {
    const source = document.getElementById("changelog-template").innerHTML;
    const template = Handlebars.compile(source);
    const html = template(changelog);
    document.querySelector("#changelog").innerHTML = html;
}

export default showChangelog