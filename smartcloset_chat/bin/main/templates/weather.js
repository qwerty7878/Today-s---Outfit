const API_KEY = "a023a55208e70df607c13cb4b444d084";

function onGeoOk(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  // console.log(`You live in ${latitude} and ${longitude}`);

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
  )
    .then((response) => response.json())
    .then((data) =>
      console.log(`온도 : ${data.main.temp}, 날씨 : ${data.weather[0].main}`)
    );
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
