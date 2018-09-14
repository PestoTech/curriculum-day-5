// lowercaseKeys({FOO: true, bAr: false});
// => { foo: true, bar: false }

function lowercaseKeys(obj) {
  const str = JSON.stringify(obj).toLowerCase();
  return JSON.parse(str);
}

module.exports = lowercaseKeys;
