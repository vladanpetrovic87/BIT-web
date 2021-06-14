/* Access/Update Text Node
Create an unordered list containing <li> items that represent navigation.

Create a function that takes text from one of the <li> elements and presents it on screen using alert. */

function liToAlert() {
    var ulList = document.querySelector('ul');
    var secondLi = ulList.querySelector('ul>li:nth-of-type(2)');
    alert(secondLi.textContent);
  }
liToAlert();

/* Create one more function.
The function should take some text as an argument.
The function should select the last <li> element in the list and replace its text with text passed as the function argument.
*/

function replaceText(textArg) {
    var ulList = document.querySelector('ul');
    var lastLi = ulList.lastElementChild;
    var newText = lastLi.textContent = textArg;
  }
  replaceText('Some other text');


