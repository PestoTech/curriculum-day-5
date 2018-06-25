// JavaScript has a built in error object that provides error information when an error occurs.

// The error object provides two useful properties: name and message.

// Go to https://www.w3schools.com/js/js_errors.asp and throw a reference error

/* eslint-disable */
let errorName = '';
let x;
try {
  x = y + 1;
} catch (error) {
  errorName = error.name;
}

module.exports = errorName;
