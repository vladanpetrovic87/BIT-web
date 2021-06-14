


// select html node
var htmlNode = document.documentElement;

console.log(htmlNode.tagName);
console.log(html.hasChildNodes());
console.log(htmlNode.childNodes);

var bodyNode = htmlNode.childNodes[1];

console.log(bodyNode);
console.log(bodyNode.tagName);


var first = document.querySelector('div');
console.log(first);

var nodeList = document.getElementsByTagName('div');

var alertNodeList = document.getElementsByClassName('alert');

var alertNodeList1 = document.querySelectorAll('.container div');

var firstDivNode = alertNodeList1[0];

console.log(nodeList);


var changeTextNode = function () {
    containerNode = document.querySelector('.container');
    containerNode.innerHtml = '<div></div>';
    console.log(containerNode.innerHtml);
}