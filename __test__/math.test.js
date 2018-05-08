const { sqrt, power, round } = require('../src/math');

describe('Use Math functions', () => {
  test('should use the functions to get correct values', () => {
    expect(sqrt).toBe(7);
    expect(power).toBe(16);
    expect(round).toBe(7);
  });
});
