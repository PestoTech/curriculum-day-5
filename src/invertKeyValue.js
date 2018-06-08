// invertKv({foo: 'bar', unicorn: 'rainbow'});
// => {bar: 'foo', rainbow: 'unicorn'}

function invertKeyValue(obj) {
  const response = {};
  Object.keys(obj).map((key) => { response[obj[key]] = key; return true; });

  return response;
}

module.exports = invertKeyValue;
