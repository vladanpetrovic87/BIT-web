var button = document.querySelector("#button");
var dog = document.querySelector("#dog");
var dogs = [];

function getImage() {
  var request = new XMLHttpRequest();
  request.open("GET", "https://dog.ceo/api/breed/hound/images/random", true);

  request.onload = function () {
    if (request.status >= 200 && request.status < 300) {
      var dogs = JSON.parse(this.responseText);
      var output = "";
      output +=
        '<div class="dogs">' +
        '<img src="' +
        dogs.message +
        '"width="600">' +
        "</div>";

      dog.innerHTML = output;
    }
  };
  request.send();
}

button.addEventListener("click", getImage);
