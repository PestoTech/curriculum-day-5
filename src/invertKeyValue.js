// invertKv({foo: 'bar', unicorn: 'rainbow'});
// => {bar: 'foo', rainbow: 'unicorn'}

function invertKeyValue(obj) {
  const arr1 = Object.keys(obj);
  const arr2 = Object.values(obj);
  const obj1 = {};
  let i;
  for (i = 0; i < arr1.length; i += 1) {
    obj1.arr1[i] = arr2[i];
  }
  return obj1;
}


module.exports = invertKeyValue;
