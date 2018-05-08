const objectValues = require('../src/objectValues');

describe('objectValues', () => {
  test('Object.values is not used', () => {
    const objectValuesRegex = /Object.values/gm;
    expect(objectValuesRegex.test(objectValues.toString())).toBe(false);
  });

  test('should return the property values in the object', () => {
    expect(objectValues({
      foo: 'foo',
      bar: 'bar',
    })).toEqual(['foo', 'bar']);
  });
});
