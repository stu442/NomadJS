
const API_KEY = "75876d894cbc19d16c2b6979da9352dc";
const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp} °C`;
    });
}
function onGeoError(){
    alert("Can't find you. No weather for you.");
    city.innerText = "🌈🌈🌈🌈";
    weather.innerText = "🌈🌈🌈🌈";
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);