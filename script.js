$("button").on("click", function() {
  var weather = $("#search-bar")
    .val()
    .trim();
  getWeather(weather);
  // getForecast(weather);
  // getUV(weather);
});

function getWeather(weather) {
  //console.log("weather " + weather);
  var queryURL =
    "http://api.openweathermap.org/data/2.5/weather?q=" +
    weather +
    "&appid=a8b347e5b5e166be903a16942ba5219c";
  //   console.log(queryURL);

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    var results = response.data;
    console.log(response);
    console.log("temperature " + kelvinToF(response.main.temp));
    console.log("humidity " + response.main.humidity);
    console.log("wind speed  " + response.wind.speed);
    console.log(text(data.name + " (" + new Date().toLocaleDateString() + ")"));

    var weatherDiv = $("<div>");

    //var p = $("<p>").text("Temperature: " + results[i].temperature);

    var forecastImage = $("<img>");

    //forecastImage.attr("src", results[i].images.fixed_height.url);

    // weatherDiv.append(p);
    weatherDiv.append(forecastImage);

    $("#weather-forecast-here").prepend(weatherDiv);
  });
}

function kelvinToF(temp) {
  return (temp - 273.15) * (9 / 5) + 32;
}
console.log(kelvinToF(285));
document.getElementById("search-bar").value = localStorage.getItem(weather);
