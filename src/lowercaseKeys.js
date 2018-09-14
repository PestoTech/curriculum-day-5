// lowercaseKeys({FOO: true, bAr: false});
// => { foo: true, bar: false }

function lowercaseKeys(obj) {
  const newObj = {};
  Object.keys(obj).forEach((key) => {
    const lowerCaseKey = key.toLowerCase();
    newObj[lowerCaseKey] = obj[key];
  });
  return newObj;
}

module.exports = lowercaseKeys;
