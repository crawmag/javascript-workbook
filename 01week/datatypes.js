// display the current time and date
let now = new Date();
console.log("The current date and time is ", now);

// Convert a number to a string
let num = 15;
let abs = num.toString();
console.log("The string representing the number is ", abs);

// Convert a string to a number
let x = "1000";
let n = Number(x);
console.log(n);

// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
let bookTitle = "The Shinning";
console.log(typeof bookTitle);

//prints out number
let numbers = 100;
console.log(typeof numbers);

//prints out boolean
let booleans = true;
console.log(typeof booleans);
//prints out undefined
let car;
console.log(typeof car);
//prints out object instead of null because the datatype of null is object
let nul = null;
console.log(typeof nul);
//prints out NaN, using type of prints out number
let nun = NaN * 0;
console.log(nun);

// Add two numbers together in javascript
let firstNum = 20;
let secondNum = 30;
console.log(firstNum + secondNum);

// Prints out "Both are TRUE" only when 2 things are true.
let ac = 1;
let bc = 2;
function lessThan(a, b) {
  if (ac < 100 && bc < 100) {
    console.log("Both are True");
  }
}
console.log(lessThan(1, 2));

// Prints out "One of these is TRUE" when 1 of 2 things are true.
let ca = 1;
let cb = 12;
function moreThan(a, b) {
  if (ca < 10 || cb < 10) {
    console.log("One of these are True");
  }
}
console.log(moreThan(1, 12));

// Prints out "Neither is TRUE" when both things are not true.
let ar = 11;
let br = 12;
function notTrue(a, b) {
  if (ar < 10 && br < 10) {
    console.log("Both are true");
  } else {
    console.log("Neither is true");
  }
}
console.log(notTrue(11, 12));
