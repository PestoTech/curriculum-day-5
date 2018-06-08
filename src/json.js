/* eslint-disable quote-props */
// JSON data is expressed as a sequence of parameter and value pairs, each pair using a colon
// character to separate parameter from value. These "parameter" : "value" pairs are themselves
// separated by commas.
// "param1":"value1", "param2":"value2", ...
// The whole sequence is enclosed in curly braces to form a JSON object representing your data:
// var jsonObject = {
//  "param1":"value1",
//  "param2":"value2",
//  "param3":"value3"
// }

// Objects written in JSON notation can have their properties accessed directly using
// the usual dot notation:
// alert(jsonObject.param1);


// Edit the JSON object detailed in the code to include an additional parameter city
// with an appropriate value of your choice.
// Add an additional statement after the object definition to output the value of
// clubMember.city to the console.

const clubMember = {
  'firstname': 'John',
  'lastname': 'Doe',
  'memberStatus': 'Full',
  'city': 'New Delhi',
};

module.exports = clubMember;
