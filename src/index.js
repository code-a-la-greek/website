const buttonUp = document.querySelector("button");
buttonUp.addEventListener('click', () => window.scrollTo(0, 0))
window.addEventListener('scroll', function (e) {
    if (window.scrollY > 400) {
        buttonUp.style.visibility = "visible";
    } else { buttonUp.style.visibility = "hidden"; }
})


const cardImages = document.querySelectorAll("#challenges img");
const cardTitle = document.querySelectorAll("#challenges h3");
const cardText = document.querySelectorAll("#challenges p");
const cardLiveDemo = document.querySelectorAll("#challenges .live");
const cardGithub = document.querySelectorAll("#challenges .github");


const getData = async () => {
    try {
        const latestDesignProject = "https://v1.nocodeapi.com/panugr/google_sheets/weAjdfuhKgnxoMqy?tabId=Projects&row_id=2";
        const splitter = "https://v1.nocodeapi.com/panugr/google_sheets/weAjdfuhKgnxoMqy?tabId=Projects&row_id=3";
        const weatherApp = "https://v1.nocodeapi.com/panugr/google_sheets/weAjdfuhKgnxoMqy?tabId=Projects&row_id=16";
        const rockPaperScissors = "https://v1.nocodeapi.com/panugr/google_sheets/weAjdfuhKgnxoMqy?tabId=Projects&row_id=18";

        const results = await Promise.all([fetch(latestDesignProject), fetch(splitter), fetch(weatherApp), fetch(rockPaperScissors)]);
        const finalData = await Promise.all(results.map(result => result.json()));
        // console.log(finalData);
        return finalData;
    } catch (error) {
        console.error(error);
    }
};

getData().
    then(data => {
        for (let i = 0; i < data.length; i++) {
            const websiteLink = data[i].website;
            const link = cardLiveDemo[i];
            link.setAttribute("href", websiteLink);

            const githubLink = data[i].github;
            const gitLink = cardGithub[i];
            gitLink.setAttribute("href", githubLink);

            const imageLink = data[i].image;
            const imageSrc = cardImages[i];
            imageSrc.setAttribute("src", imageLink);

            const title = data[i].title;
            const titleHtml = cardTitle[i];
            titleHtml.innerHTML = title;

            const text = data[i].info;
            const textHtml = cardText[i];
            textHtml.innerHTML = text;
        }
    });


/* const dataArray = [data[0], data[1], data[2], data[3]];
const liveDemo = [data[0].website, data[1].website, data[2].website, data[3].website];
const githubLinks = [data[0].github, data[1].github, data[2].github, data[3].github];
const image = [data[0].image, data[1].image, data[2].image, data[3].image];
const infoText = [data[0].info, data[1].info, data[2].info, data[3].info];
const title = [data[0].title, data[1].title, data[2].title, data[3].title];
//console.log(liveDemo)

for (let i = 0; i < liveDemo.length; i++) {
    const websiteLink = liveDemo[i];
    const element = cardLiveDemo[i];
    element.setAttribute("href", websiteLink)
} */