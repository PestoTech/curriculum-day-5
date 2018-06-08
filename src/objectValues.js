/* eslint-disable no-unused-vars */

// objectValues({foo: 0, bar: 1});
// //=> [0, 1]
// Do not use Object.values
function objectValues(object) {
  const response = {};
  return Object.keys(object).map(key => object[key]);
}

module.exports = objectValues;
