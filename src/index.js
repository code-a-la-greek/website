const buttonUp = document.querySelector("button");
buttonUp.addEventListener('click', () => window.scrollTo(0, 0))
window.addEventListener('scroll', function (e) {
    if (window.scrollY > 400) {
        buttonUp.style.visibility = "visible";
    } else { buttonUp.style.visibility = "hidden"; }
})


const cardImages = document.querySelector("#challenges section img");
const cardTitle = document.querySelector("#challenges h3");
const cardText = document.querySelector("#challenges section p");
const cardLiveLink = document.querySelector("#challenges .live");
const cardGithub = document.querySelector("#challenges .github");


const getData = async () => {
    try {
        const latestDesignProject = "https://v1.nocodeapi.com/panugr/google_sheets/weAjdfuhKgnxoMqy?tabId=Projects&row_id=2";
        const results = await fetch(latestDesignProject);
        const data = await results.json();
        return data;
    } catch (error) {
        console.error(error);
    }
};

getData().
    then(data => {
        cardLiveLink.setAttribute("href", data.website);
        cardGithub.setAttribute("href", data.github);
        cardImages.setAttribute("src", data.image);
        cardTitle.innerHTML = data.title;
        cardText.innerHTML = data.info;
    });


