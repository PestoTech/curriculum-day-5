/* eslint-disable */
// invertKv({foo: 'bar', unicorn: 'rainbow'});
// => {bar: 'foo', rainbow: 'unicorn'}

function invertKeyValue(ob) {
  const bar = Object.keys(ob)
    .reduce(function (obj, key) {
      return Object.assign({}, obj, { [ob[key]]: key })
    }, {});

  return bar;
}

module.exports = invertKeyValue;
