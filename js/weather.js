const API_KEY = "3738561a3a177b08c56a638374c6a83f";


function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log("당신의 현재 위치는", lat, lng);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(Response => Response.json())
    .then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`
    });
}



function onGeoError() {
    alert("위치를 찾을 수 없습니다. 기상 정보를 제공할 수 없습니다.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);