// Selecting One/Multiple Elements
// Create two unordered lists on the page.
    
// Create a function that selects the second list and applies a class that sets some background color to it.

// Create a second function that, when triggered, selects all <li> elements on the page. 
// The function also sets a class that sets some bg color to every <li> element.

// Create one more unordered list and one more function
// The function​ should select only <li> elements from that last list
// Each <li> element should get a class that sets some bg color and transforms the text to uppercase.


var ulFirst = document.querySelectorAll("ul")[0];



function setColorToUl (ul) {
    var ulSecond = document.querySelectorAll("ul")[1];
    ulSecond.style.background = "tomato";
}

function getAllLi(selector, className){
    var allLi = document.querySelectorAll(selector);
    for(var i = 0; i < allLi.length; i++) {
        allLi[i].className = className;
    }
}

function selectLastUl(){
    var lastUlLi = document.querySelectorAll("ul:last-Of-Type>li");
    for(var i = 0; i < lastUlLi.length; i++) {
        lastUlLi[i].className = "color-and-text-li"
    }
    return lastUlLi
}

// setColorToUl(ulSecond);
// getAllLi("li", "liColor");
selectLastUl();
