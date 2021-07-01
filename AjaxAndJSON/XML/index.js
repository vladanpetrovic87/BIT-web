/* XML

Use Geolocation API service
You can find the documentation for this API at  https://www.geoplugin.com/webservices/xml

Check out the documentation to see how to use this API

Create a function which is sending request via AJAX and getting data in XML format


When data is received from the server, extract country name which is detected based on IP address, and show it on the screen.

Extra: 
There is a button and input field on HTML page!
Each time user clicks the button, function for getting geolocation data is invoked and new ip address written in input field is used when sending request.
*/

var ENDPOINT = "http://www.geoplugin.net/xml.gp?ip=";
var $continentDisplay = document.querySelector("#continent");
var $countryDisplay = document.querySelector("#country");
var $cityDisplay = document.querySelector("#city");
var $submit = document.querySelector("#submit");
var $ipInput = document.querySelector("#ip");

//1. create request
var newRequest = new XMLHttpRequest();

//3. onload handler
newRequest.onload = function () {
  if (newRequest.status >= 200 && newRequest.status < 300) {
    var response = newRequest.responseXML;
    var continent = response.querySelector("geoplugin_continentName").textContent;
    var country = response.querySelector("geoplugin_countryName").textContent;
    var city = response.querySelector("geoplugin_city").textContent;

    $continentDisplay.textContent = continent;
    $countryDisplay.textContent = country;
    $cityDisplay.textContent = city;
  }
};

function fetchLocation() {
  var ipAddress = $ipInput.value;
  var completeURL = ENDPOINT + ipAddress;
  //2. init request
  newRequest.open("GET", completeURL);
  //4. send request
  newRequest.send();
}

$submit.addEventListener("click", fetchLocation);

// $submit.addEventListener("click", function () {
//   var ipAddress = $ipInput.value;
//   var completeURL = ENDPOINT + ipAddress;
//   //2. init request
//   newRequest.open("GET", completeURL);
//   //4. send request
//   newRequest.send();
// });
