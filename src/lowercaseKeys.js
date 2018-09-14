// lowercaseKeys({FOO: true, bAr: false});
// => { foo: true, bar: false }

function lowercaseKeys(obj) {
  const ret = {};

  const keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i += 1) {
    ret[keys[i].toLowerCase()] = obj[keys[i]];
  }

  return ret;
}

module.exports = lowercaseKeys;
