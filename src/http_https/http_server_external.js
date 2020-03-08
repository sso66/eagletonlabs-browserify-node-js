// http_server_external.js
/*
 * Implementing an HTTP web server that connects
 *  to an external source for weather data.
 */
var http = require('http');
var url = require('url');
var qs = require('querystring');

function sendResponse(weatherData, response) {
  var webpage = "";
  webpage += "<!DOCTYPE html>";
  webpage += "<html>";
  webpage += "<head><title>External Interface</title></head>";  
  webpage += "<body style='background-color: orange;'>";
  webpage += "<h1>HTTP Server External Interface</h1>";
  webpage += "<form method='post'>";
  webpage += "Search: <input name='city' placeholder='Enter city name' />";
  webpage += "<input type='submit' value='Get Weather Info' />";
  webpage += "</form>";    
  if (weatherData) {
    webpage += "<div style='background-color: black; color:white; font-size: 1.1em;'>";
    webpage += "<h2>Weather Info</h2>";
    webpage += "<p>" + weatherData + "</p>";
  }
  webpage += "</body>"; 
  webpage += "</html>";
  
  response.end(webpage);
}

function parseWeather(weatherResponse, response) {
  var weatherData ="";
  
  weatherResponse.on('data', function(chunk) {
    weatherData += chunk;
  });
  
  weatherResponse.on('end', function() {
    sendResponse(weatherData, response);
  });
}

function getWeather(city, response) {
  var apiKey = '&appid=1bbdf5503d53c515a35ee056219bf261';

  var options = {
    host: 'api.openweathermap.org',
    path: '/data/2.5/weather?q=' + city.replace(/\s+/g, "") + apiKey
  };
  
  console.log(options.host + options.path);
  
  http.request(options, function(weatherResponse) {
    parseWeather(weatherResponse, response);
  }).end();
}

http.createServer(function(request, response) {
  console.log(request.method);
  if (request.method == 'POST') {
    var requestData = "";    
    request.on('data', function(chunk) {
      requestData += chunk;
    });
    
    request.on('end', function(chunk) {
      var postParams = qs.parse(requestData);
      getWeather(postParams.city, response);
    });
  } else {
      sendResponse(null, response);
  } 
}).listen(8080);
url = 'http://127.0.0.1:8080';
console.log('HTTP web server runnig at ' + url);


