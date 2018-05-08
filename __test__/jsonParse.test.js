const objectSara = require('../src/jsonParse');

describe('using JSON.parse', () => {
  test('should correctly use JSON.parse on the JSON', () => {
    expect(typeof objectSara).toEqual('object');
  });
});
