const lowercaseKeys = require('../src/lowercaseKeys');

describe('lowercaseKeys', () => {
  test('should return', () => {
    expect(lowercaseKeys({ FOO: true }).foo).toBe(true);
    expect(lowercaseKeys({ FOO: true, bAr: true }).bar).toBe(true);
  });
});
