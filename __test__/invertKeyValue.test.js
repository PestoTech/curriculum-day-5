const invertKeyValue = require('../src/invertKeyValue');

describe('invertKeyValue', () => {
  test('', () => {
    expect(invertKeyValue({ foo: 'bar', unicorn: 'rainbow' }))
      .toEqual({ bar: 'foo', rainbow: 'unicorn' });
  });
});
