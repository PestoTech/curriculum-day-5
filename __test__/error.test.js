const errorName = require('../src/error');

test('throwing errors', () => {
  test('throw a reference error correctly', () => {
    expect(errorName).toBe('ReferenceError');
  });
});
