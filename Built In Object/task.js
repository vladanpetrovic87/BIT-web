
function getPlatform() {
    console.log("Platfrom: ", window.navigator.platform);
  }
getPlatform();
  
  
  function browserInformation() {
    console.log("Browser Information: ", window.navigator.userAgent);
  }
  browserInformation();
  
 
  function browserCompany() {
    console.log("Browser Company: ", window.navigator.vendor);
  }
  browserCompany();

 
  function isOnline() {
    window.navigator.onLine ? console.log("Browser Is OnLine") : console.log("Browser Is OffLine");
  }

isOnline();
  
 
  function browserWidthHeight() {
    console.log("Browser Width: ", window.screen.width);
    console.log("Browser Height: ", window.screen.height);
  }
  browserWidthHeight();
  
 
  function browserMaxHeight() {
    console.log("Browser Max Possible Height: ", window.screen.availHeight);
  }
  browserMaxHeight();

  
  function fullUrl() {
    console.log("Full URL Address: ", window.location.href);
    console.log("Domain Name: ", window.location.hostname);
    console.log("Used Protocol: ", window.location.protocol);
    console.log("Parameters of URL: ", window.location.pathname);
  }

  fullUrl();
  

window.localStorage.setItem("firstname", "Vladan");

var name = localStorage.getItem("firstname");

function printLocal(data) {
    if(data !== '' && data !== null) {
        console.log("First name: ", name); 
    }
    else {
        console.log("There is no data");
    }
}
printLocal();


// window.localStorage.removeItem("firstname");


window.sessionStorage.setItem("lastname", "Petrovic");

var name1 = sessionStorage.getItem("lastname");

function printSession(data) {
    if(data !== '' && data !== null) {
        console.log("Lastname: ", name1); 
    }
    else {
        console.log("There is no data");
    }
}
printSession();

printLocal(name1);
printSession(name);


function goBack() {
    window.history.go(-2);
}
goBack();

// Window Methods

// ● Create a function that shows the user a greeting message using alert
// ● Then a question is presented to the user using prompt
// ● When the user provides the answer, that answer is used in the confirm
// dialog
// ● The format of the message in the dialog should be: &quot;We will submit this
// answer now! &quot; + the answer
// ● If the user clicks OK, show alert with success message
// ● If the user clicks Cancel, don&#39;t show anything


function message() {
    alert("Hello!");
    var mess = prompt("Enter your name");
    !confirm("We will submit this answer now! " + mess) ? false : alert("Succes message");
}
message();



