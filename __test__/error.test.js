const errorName = require('../src/error');

describe.only('throwing errors', () => {
  test.only('throw a reference error correctly', () => {
    expect(errorName).toBe('ReferenceError');
  });
});
