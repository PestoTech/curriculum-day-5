// invertKv({foo: 'bar', unicorn: 'rainbow'});
// => {bar: 'foo', rainbow: 'unicorn'}

function invertKeyValue(object) {
  const newObj = {};
  Object.keys(object).forEach((key) => {
    newObj[object[key]] = key;
  });
  return newObj;
}

module.exports = invertKeyValue;
