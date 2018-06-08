// You can interpret a JSON string using the method JSON.parse(), which takes a string
// containing a JSON-serialized object and breaks it up, creating an object with properties
// corresponding to the `"parameter":"value" pairs found in the string.

const Sara = '{ "height":1.9, "age":36, "eyeColor":"brown"}';

// use JSON.parse() to create an object 'objectSara':
const objectSara = `${Sara}`;

module.exports = JSON.parse(objectSara);
