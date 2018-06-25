/* eslint-disable no-unused-vars */

// objectValues({foo: 0, bar: 1});
// //=> [0, 1]
// Do not use Object.values
function objectValues(object) {
  const values = Object.keys(object).map(e => object[e]);
  return values;
}

module.exports = objectValues;
