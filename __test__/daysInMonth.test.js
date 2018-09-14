const {
  countDaysInMonth
} = require('../src/daysInMonth');

describe('countDaysInMonth', () => {
  test('should return correct number of days', () => {
    expect(countDaysInMonth(2014, 4)).toBe(30);
    expect(countDaysInMonth(2016, 1)).toBe(31);
  });
});