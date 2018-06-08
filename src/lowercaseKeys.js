// lowercaseKeys({FOO: true, bAr: false});
// => { foo: true, bar: false }

function lowercaseKeys(obj) {
  const response = {};
  Object.keys(obj).map((key) => {
    response[key.toLowerCase()] = obj[key];
    return true;
  });
  return response;
}

module.exports = lowercaseKeys;
