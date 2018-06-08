// JavaScript has a built in error object that provides error information when an error occurs.

// The error object provides two useful properties: name and message.
/* eslint-disable */
// Go to https://www.w3schools.com/js/js_errors.asp and throw a reference error

let errorName = '';

try {
  const x = y;
  console.log(x);
} catch (error) {
  errorName = error.name;
}

module.exports = errorName;
