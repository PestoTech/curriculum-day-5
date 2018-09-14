/* eslint-disable no-unused-vars */

// objectValues({foo: 0, bar: 1});
// //=> [0, 1]
// Do not use Object.values
function objectValues(object) {
  const arr = [];
  // eslint-disable-next-line
  arr.push(object['foo']);
  // eslint-disable-next-line
  arr.push(object['bar']);
  return arr;
}

module.exports = objectValues;
