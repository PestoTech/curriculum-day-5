const saraStringified = require('../src/jsonStringify');

describe('JSON.stringify', () => {
  test('should use JSON.stringify() properly on the object', () => {
    expect(typeof saraStringified).toEqual('string');
  });
});
