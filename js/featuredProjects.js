let css = [];
let javascript = [];
let bootstrap = [];
const url =
    "https://v1.nocodeapi.com/panugr/google_sheets/GwaQLFgqhfpjKNFb?tabId=Projects 2021";

//ASYNC FETCH
const getData = async () => {
    try {
        const res = await fetch(url);
        const data = await res.json();
        const project = data.data;
        return project;
    } catch (error) {
        console.error(error);
    }
};

getData().then((project) => {
    for (const key in project) {
        switch (project[key].type) {
            case "css":
                css.push(project[key]);
                break;
            case "javascript":
                javascript.push(project[key]);
                break;
            case "bootstrap":
                bootstrap.push(project[key]);
                break;
        }
    }
    showData();
});

function showData() {
    for (let i = 0; i < 5; i++) {
        let cssProjects = css[i];
        document.querySelector("#css").innerHTML += `<div class="project-card">
    <div>
        <h3>${cssProjects.title}</h3>
        <p>${cssProjects.info}</p>
        <a href="${cssProjects.website}" class="button button-primary"> PREVIEW SITE </a>
        <a href="${cssProjects.github}" class="button"> VIEW CODE </a>
    </div>
    <img src="../pictures/screenshot0.webp" width="500" height="500" aria-hidden="true" alt="" />
</div>`;
    }
    for (let i = 0; i < 5; i++) {
        let javascriptProjects = javascript[i];
        document.querySelector(
            "#javascript"
        ).innerHTML += `<div class="project-card">
              <div>
                  <h3>${javascriptProjects.title}</h3>
                  <p>${javascriptProjects.info}</p>
                  <a href="${javascriptProjects.website}" class="button button-primary"> PREVIEW SITE </a>
                  <a href="${javascriptProjects.github}" class="button"> VIEW CODE </a>
              </div>
              <img src="../pictures/screenshot0.webp" width="500" height="500" aria-hidden="true" alt="" />
          </div>`;
    }
    for (let i = 0; i < 5; i++) {
        let bootstrapProjects = bootstrap[i];
        document.querySelector(
            "#bootstrap"
        ).innerHTML += `<div class="project-card">
      <div>
          <h3>${bootstrapProjects.title}</h3>
          <p>${bootstrapProjects.info}</p>
          <a href="${bootstrapProjects.website}" class="button button-primary"> PREVIEW SITE </a>
          <a href="${bootstrapProjects.github}" class="button"> VIEW CODE </a>
      </div>
      <img src="../pictures/screenshot0.webp" width="500" height="500" aria-hidden="true" alt="" />
  </div>`;
    }
}
