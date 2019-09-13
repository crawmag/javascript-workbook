// display the current time and date
var now = new Date();
console.log("The time at the beep is", now);

// Convert a number to a string
var num = 15;
var a = num.toString(16);
console.log(a);

// Convert a string to a number
var x = "1000";
var n = Number(x);
console.log(n);

// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
var bookTitle = "The Shinning";
console.log(typeof bookTitle);

// Add two numbers together in javascript
let firstNum = 20;
let secondNum = 30;
console.log(firstNum + secondNum);

// Prints out "Both are TRUE" only when 2 things are true.
var a = 1;
var b = 2;
function lessThan(a, b) {
  if (a < 100 && b < 100) {
    console.log("Both are True");
  }
}
console.log(lessThan(1, 2));

// Prints out "One of these is TRUE" when 1 of 2 things are true.
var a = 1;
var b = 12;
function moreThan(a, b) {
  if (a < 10 || b < 10) {
    console.log("One of these are True");
  }
}
console.log(moreThan(1, 12));

// Prints out "Neither is TRUE" when both things are not true.
var a = 11;
var b = 12;
function notTrue(a, b) {
  if (a < 10 && b < 10) {
    console.log("Both are true");
  } else {
    console.log("Neither is true");
  }
}
console.log(notTrue(11, 12));
