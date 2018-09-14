// JavaScript has a built in error object that provides error information when an error occurs.

// The error object provides two useful properties: name and message.

// Go to https://www.w3schools.com/js/js_errors.asp and throw a reference error

let errorName = '';

try {
  // eslint-disable-next-line
  const sum = num1 + num2 + 5;
} catch (error) {
  errorName = error.name;
}

module.exports = errorName;
