$("button").on("click", function() {
  var weather = $("#search-bar")
    .val()
    .trim();
  getWeather(weather);
});

function getWeather(weather) {
  var queryURL =
    "http://api.openweathermap.org/data/2.5/weather?q=" +
    weather +
    "&appid=a8b347e5b5e166be903a16942ba5219c";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    console.log("temperature " + kelvinToF(response.main.temp).toPrecision(3));
    console.log("humidity " + response.main.humidity);
    console.log("wind speed  " + response.wind.speed);
    // console.log(data.name + " (" + new Date().toLocaleDateString() + ")");

    var weatherDiv = $("<p>");
    weatherDiv.text(
      "temperature " +
        kelvinToF(response.main.temp) +
        "°" +
        (" humidty " + response.main.humidity) +
        (" wind speed " + response.wind.speed)
    );
    weatherDiv.text;
    //var forecastImage = $("<img>");

    //weatherDiv.append(forecastImage);

    $(".container-xl").prepend(weatherDiv);
  });
}
function getUVI(lat, lon) {
  var queryURL =
    "http://api.openweathermap.org/data/2.5/uvi?appid=7ba67ac190f85fdba2e2dc6b9d32e93c&lat=" +
    lat +
    "&lon=" +
    lon;
  //"http://api.openweathermap.org/data/2.5/uvi?appid=a8b347e5b5e166be903a16942ba5219c&lat=37.75&lon=122.37";
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log("temperature " + kelvinToF(response.main.temp));
    console.log(response);
  });
}

// getUVI();

function kelvinToF(temp) {
  return (temp - 273.15) * (9 / 5) + 32;
}
console.log(kelvinToF(285));
