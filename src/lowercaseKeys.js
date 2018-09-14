// lowercaseKeys({FOO: true, bAr: false});
// => { foo: true, bar: false }

function lowercaseKeys(obj) {
  let obj2 = {};
  let key2;
  obj2 = Object.keys(obj).reduce((acc, key) => {
    key2 = key.toLocaleLowerCase();
    acc[key2] = obj[key];
    return acc;
  }, {});
  return obj2;
}

module.exports = lowercaseKeys;
