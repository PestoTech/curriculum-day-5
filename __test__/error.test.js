const errorName = require('../src/error');

describe('throwing errors', () => {
  test('throw a reference error correctly', () => {
    expect(errorName).toBe('ReferenceError');
  });
});
