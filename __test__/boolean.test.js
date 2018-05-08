const bool = require('../src/boolean');

describe('check for boolean', () => {
  test('should return a boolean', () => {
    expect(typeof bool).toBe('boolean');
  });
});
