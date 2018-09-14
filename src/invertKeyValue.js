// invertKv({foo: 'bar', unicorn: 'rainbow'});
// => {bar: 'foo', rainbow: 'unicorn'}

function invertKeyValue(obj) {
  let obj2 = {};
  obj2 = Object.keys(obj).reduce((acc, key) => {
    acc[obj[key]] = key;
    return acc;
  }, {});
  return obj2;
}

module.exports = invertKeyValue;

