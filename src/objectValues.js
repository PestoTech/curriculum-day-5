/* eslint-disable no-unused-vars */

// objectValues({foo: 0, bar: 1});
// //=> [0, 1]
// Do not use Object.values
function objectValues(object) {
  const obJValArr = [];
  Object.keys(object).forEach((key) => {
    obJValArr.push(object[key]);
  });
  return obJValArr;
}

module.exports = objectValues;
