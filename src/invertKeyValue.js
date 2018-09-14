// invertKv({foo: 'bar', unicorn: 'rainbow'});
// => {bar: 'foo', rainbow: 'unicorn'}

function invertKeyValue(obj) {
  const ret = {};

  const keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i += 1) ret[obj[keys[i]]] = keys[i];

  return ret;
}

module.exports = invertKeyValue;
