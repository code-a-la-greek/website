//VARIABLES

const lang = navigator.language;
const user = document.querySelector("input");
const search = document.getElementsByTagName("i")[1];
const key = "a07417019f57f1221a75fe34be7be34c";
const showForecast = document.getElementsByTagName('section')[1];
const showWeatherNow = document.getElementsByTagName('section')[0];
const dropdown = document.querySelector(".dropdown-menu");
const checkbox = document.querySelector("input[name=theme]");

//BASIC API CALLS
function weatherNow() {
    const api = "https://api.openweathermap.org/data/2.5/weather?";
    const city = user.value;

    const parameters = `q=${city}&units=metric&${lang}&appid=${key}`;
    const url = api + parameters;
    //HANDLE RESPONSE
    const xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            createCurrent(xhr.response);
        }
    };
    //OPEN REQUEST AND SEND OBJECT
    xhr.open("GET", url);
    xhr.send();
}

function weatherForecast() {
    const api = "https://api.openweathermap.org/data/2.5/forecast?";
    const city = user.value;

    const parameters = `q=${city}&units=metric&cnt=20&${lang}&appid=${key}`;
    const url = api + parameters;
    const xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {

            const forecast = xhr.response.list;
            for (let i = 1; i < forecast.length; i++) {
                createForecast(forecast[i]);
            }
        }
    }
    xhr.open("GET", url);
    xhr.send();
}

//UTILITY FUNCTIONS
function createCurrent(data) {
    const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit' });
    const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit' });
    const wind = `${Math.round((data.wind.speed * 18) / 5)}km/h ${degToCompass(data.wind.deg)}`;
    const iconId = data.weather[0].icon;
    showWeatherNow.innerHTML = ` 
    <div class="col-md-6" role="grid">
        <section class="card">
            <h2 class="card-header">Weather conditions in ${data.name},${data.sys.country}</h2>
            <img class="card-img-top w-25 h-25 bg-light rounded-circle mt-1 ml-1" alt="picture describing the weather" src="https://openweathermap.org/img/wn/${iconId}@2x.png" />
            <article class="card-body">
                <h3 class= "card-title">Currently ${Math.floor(data.main.temp)}℃</h3>
                <p class="card-text text-capitalize">${data.weather[0].description}</p>
                <table class="table">
                    <tr >
                        <td>Max temp</td>
                        <td>${Math.floor(data.main.temp_max)}℃</td>
                    </tr>
                    <tr >
                        <td>Min temp</td>
                        <td>${Math.floor(data.main.temp_min)}℃</td>
                    </tr>
                    <tr >
                        <td>Wind</td>
                        <td>${wind}</td>
                    </tr>
                    <tr >
                        <td>Humidity</td>
                        <td>${data.main.humidity}%</td>
                    </tr>
                    <tr >
                        <td>Clouds</td>
                        <td>${data.clouds.all}%</td>
                    </tr>
                </table>
            </article>
        </section>
    </div>
    <div class="col-md-6" role="grid">
        <section class="card">
            <h2 class="card-header">Sunrise / Sunset</h2>
            <article class="card-body">
                <figure class="card-img-top d-flex justify-content-around">
                <img class="w-25 rounded-pill" alt="photo of a sunrise" src="./sunrise.jpg"/>
                <img class="w-25 rounded-pill" alt="photo of a sunset" src="./sunset.jpg" />
                </figure>
                <table class="table">
                    <tr class="table-primary">
                        <td>Rise</td>
                        <td >${sunrise}</td>
                        <td>Set</td>
                        <td>${sunset}</td>
                    </tr>
                </table>
            </article>
        </section>
    </div>`
}

function createForecast(data) {
    const date = new Date(data.dt_txt).toLocaleString(undefined, {
        weekday: "long", day: "numeric", month: "short", hour: '2-digit'
    })
    const wind = `${Math.round((data.wind.speed * 18) / 5)}km/h ${degToCompass(data.wind.deg)}`
    showForecast.innerHTML += ` <ul
    class="list-group list-group-horizontal justify-content-between border-bottom border-secondary rounded-0 text-capitalize dropdown">
    <li>
        <a
        class="h2 dropdown-toggle link-dark"
        id="weatherNext"
        data-toggle="dropdown"
        aria-expanded="false">
        ${data.weather[0].description} ${Math.floor(data.main.temp)}℃
        </a>
        <h4 class="text-muted">${date}</h4>
        <table class="dropdown-menu" aria-labelledby="weatherNext">
        <tr>
            <td class="text-secondary">Feels like</td>
            <td>${Math.floor(data.main.feels_like)}℃</td>
        </tr>
        <tr>
            <td class="text-secondary">Wind</td>
            <td>${wind}</td>
        </tr>
        <tr>
            <td class="text-secondary">Humidity</td>
            <td>${data.main.humidity}%</td>
        </tr>
    </table>
    </li>

    <li>
        <img
        loading=lazy
        alt="picture showing the weather conditions"
        src="${`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}"/>
    </li>
</ul>`

}

function degToCompass(angle) {
    const directions = ['↑ N', '↗ NE', '→ E', '↘ SE', '↓ S', '↙ SW', '← W', '↖ NW'];
    return directions[Math.round(angle / 45) % 8];
}
function displayRes() {
    document.getElementsByTagName('main')[0].classList.add('fadeIn');
    document.getElementsByTagName('header')[0].style.height = '40vh';
}

//DARK-THEME
checkbox.addEventListener("change", function () {
    if (this.checked &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
        trans();
        document.documentElement.setAttribute("data-theme", "light");
    }
    else if (
        this.checked && !
        window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
        trans();
        document.documentElement.setAttribute("data-theme", "dark");
    } else {
        document.documentElement.setAttribute("data-theme", "initial");
    }
});

let trans = () => {
    document.documentElement.classList.add("transition");
    window.setTimeout(() => {
        document.documentElement.classList.remove("transition");
    }, 400);
};

 dropdown.onclick = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showGPS, showError);
    }

    function showGPS(position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
       
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&${lang}&appid=${key}`)
            .then(res => res.json())
            .then(data => createCurrent(data))
            .then(displayRes())
            .then(showForecast.innerHTML = '');
        fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&cnt=20&${lang}&appid=${key}`)
            .then(res => res.json())
            .then(data => {
                for (let i = 1; i < data.list.length; i++) {
                    createForecast(data.list[i]);
                }
            })
            .then(displayRes())

    }
    function showError(error) {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                alert("User denied the request for Geolocation. Please allow access to your location and try again.");
                break;
            case error.POSITION_UNAVAILABLE:
                alert("Location information is unavailable.");
                break;
            case error.TIMEOUT:
                alert("The request to get user location timed out. Please check your internet connection and try again later.");
                break;
            case error.UNKNOWN_ERROR:
                alert("An unknown error occurred.");
                break;
        }
    }
}

//EVENT LISTENERS
document.querySelector('h1').onclick = () => { location.reload(); }

user.addEventListener("keyup", function (event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.key === 'Enter') {
        showForecast.innerHTML = '';
        showWeatherNow.innerHTML = '';
        weatherNow();
        weatherForecast();
        displayRes();
    }
});
search.addEventListener('click', () => {
    showForecast.innerHTML = '';
    showWeatherNow.innerHTML = '';
    weatherNow();
    weatherForecast();
    displayRes();
});
