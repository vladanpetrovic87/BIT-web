// Traversing
// Create two unordered lists.
// Each list should be wrapped in a div element.
// One <li> element in the second list should have a class “active”, which sets its background color.

// Create a function that selects the <li> element with class “active”.
// Remove the class from that element, and then select the first <li> element in the first unordered list using node relations.
// Apply class to that newly selected <li> element


var lastUl = document.querySelectorAll("ul")[document.querySelectorAll("ul").length - 1];

var firstLi = document.children[0].children[1].children[0].children[0].children[0];

function selectLi(num){
    var selectedLi = lastUl.children[num - 1];
    selectedLi.setAttribute("class", "active");
}

function removeActiveAndSetFirst(arg){
    if(arg.className === "active") {
        arg.className = "";
        firstLi.className = "active";
    }
} 

var activeLi = selectLi(4);
removeActiveAndSetFirst(activeLi);

