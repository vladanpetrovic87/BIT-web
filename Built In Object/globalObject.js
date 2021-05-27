/****************************************************************************************
● Random
Create a function that builds an array of 10 random numbers between 1 and 50.
The function prints that array out in the console and then returns it.
/****************************************************************************************/

array = [];
function someRandomArray(arr) {
  do {
    arr.push(Math.floor(Math.random() * 50) + 1);
  } while (array.length < 10);
  return array;
}
console.log(someRandomArray(array));

/****************************************************************************************
● Round
Create a function that uses the passed array of numbers and rounds all its
elements to two decimals.
Print out the modified array in the console.
Use the first function for generating the input array.
/****************************************************************************************/
var a = [5.224412, 10.42142, 15.4563, 20.14214];

var getRoundedArray = function (arr) {
  var newArray = [];
  arr.forEach(function (elem) {
    newArray.push(Math.round(elem * 100) / 100);
  });
  return newArray;
};

var result = getRoundedArray(a);
console.log(result);
///

/****************************************************************************************
● Floor
Create a function that uses the passed array of numbers and rounds all its
elements to the nearest integer.
Print out the modified array in the console.
Use the first function for generating the input array.
/****************************************************************************************/
var a = [5.224412, 10.42142, 15.4563, 20.14214];

var getRoundedArray = function (arr) {
  var newArray = [];
  arr.forEach(function (elem) {
    newArray.push(Math.floor(elem));
  });
  return newArray;
};

var result = getRoundedArray(a);
console.log(result);
/****************************************************************************************
● Max
Create a function that finds and prints out the biggest element in the passed
array of numbers.
/****************************************************************************************/
var a = [5.224412, 10.42142, 15.4563, 20.14214];

// spread operator (ES6)
var a = [5.224412, 10.42142, 15.4563, 20.14214];

var max = Math.max(...a);
console.log(max);




//TASK 1. Print out the whole date object in the console.
var wholeDate = Date();
console.log("Whole data object is " + wholeDate);

//TASK 2. Print out the current time in the console.

var now = new Date();
var currentTime = now.toLocaleTimeString();
console.log("Current Time is " + currentTime);

//TASK 3. Print out the current date in the console.

var now = new Date();
var currentDate = now.toLocaleDateString();
console.log("Current Date is " + currentDate);