// JavaScript has a built in error object that provides error information when an error occurs.

// The error object provides two useful properties: name and message.

// Go to https://www.w3schools.com/js/js_errors.asp and throw a reference error

let errorName = '';

try {
  // code here
  throw new ReferenceError('A reference error');
} catch (error) {
  errorName = error.name;
}

module.exports = errorName;
