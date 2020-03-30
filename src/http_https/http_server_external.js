// File: http_server_external.js
// Note: Implementing an HTTP web services that connects remotely to to an 
//       external source for weather data.
// Date: 3/30/2020
//..............................................................................
console.log("Mounting http_server_external.js...\n");
/*
 * A common use of the HTTP services in Note.js is to access external systems
 * to get data to fulfill client requests.
 * 
 * A variety of external systems provide data that can be use in various ways.
 * 
 * In this case study, the code connects to the openweathermap.org API to 
 * retrieve wether information about a city.
 * 
 * To keep the example simple, the output from openweathermap.org is pushed
 * to the browser in raw format.
 * 
 * In reality, you would likely massage the pieces of data needed into you own
 * pages, widgets, or data responses.
 * 
 * The following code shows the implementation of a web service accepts both
 * GET and POST requests.
 * 
 * For GET request, a simple webpage with a form is returned that allows the 
 * user to post a city and connects remotely to openweathermap.org to retrieve
 * weather info for that city.
 * 
 * Then that info is returned back to the server, along with the original web
 * form.
 * 
 * The big difference between this case study and the previous case studies is
 * that this webserver aslo implement local web client to connect to the 
 * external service and get data to formulate the response.
 * 
 * Notice the webserver is implemenation that if the method is POST, we read
 * the data form the form data from the request stream and use 
 * querystring.parse() to get the city name and call into the getWeather() 
 * function.
 * 
 * The getWeather() function implements the client request to openweathermap.org.
 * 
 * Then the parseWeather() request handler reads the response from the 
 * openweathermap.org and passes tha data to the sendResponse() function, which
 * formulates the response and sends it back to the client.
 * 
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
// Interacting with External Sources
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

// url = 'http://127.0.0.1:8080';
// console.log('HTTP web server runnig at ' + url);

// eof

