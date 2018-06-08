// JavaScript has a built in error object that provides error information when an error occurs.

// The error object provides two useful properties: name and message.

// Go to https://www.w3schools.com/js/js_errors.asp and throw a reference error

let errorName = '';
let x = 0;
let g = 0;
try {
  x = y + 1 + g;
  g = x + 4;
} catch (error) {
  errorName = error.name;
}
module.exports = errorName;
