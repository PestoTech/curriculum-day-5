/* eslint no-param-reassign: "error" */
// lowercaseKeys({FOO: true, bAr: false});
// => { foo: true, bar: false }

function lowercaseKeys(obj) {
  return Object.keys(obj).reduce((accum, key) => {
    accum[key.toLowerCase()] = obj[key];
    return accum;
  }, {});
}

module.exports = lowercaseKeys;
