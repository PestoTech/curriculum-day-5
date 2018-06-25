// You can create a JSON-encoded string of an object using the JSON.stringify() method.

// Such string-encoded objects are useful when, for instance, you want to transmit object
// data across a communications network; your object can be sent as a string and reconstructed
// at the other end.

const Sara = {};
Sara.height = 1.9;
Sara.age = 36;
Sara.eyecolor = 'brown';

// serialize the object using JSON.stringify():
const saraStringified = JSON.stringify(Sara);

module.exports = saraStringified;
