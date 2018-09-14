/* eslint-disable no-unused-vars */

// objectValues({foo: 0, bar: 1});
// //=> [0, 1]
// Do not use Object.values
function objectValues(object) {
  const ret = [];

  const keys = Object.keys(object);
  for (let i = 0; i < keys.length; i += 1) {
    ret.push(object[keys[i]]);
  }

  return ret;
}

module.exports = objectValues;
