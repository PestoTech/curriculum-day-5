// invertKv({foo: 'bar', unicorn: 'rainbow'});
// => {bar: 'foo', rainbow: 'unicorn'}

function invertKeyValue() {
  const obj = { foo: 'bar', unicorn: 'rainbow' };
  return Object.assign({}, ...Object.entries(obj).map(([a, b]) => ({ [b]: a })));
}

module.exports = invertKeyValue;
