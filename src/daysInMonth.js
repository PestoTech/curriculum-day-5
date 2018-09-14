// Get the number of days in a given month

// countDaysInMonth(2016, 11); //=> 31
// countDaysInMonth(2016, 8); //=> 30

const daysInMonthNonLeap = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const daysInMonthLeap = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function isLeapYear(year) {
  return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
}

function countDaysInMonth(year, month) {
  if (isLeapYear(year)) return daysInMonthLeap[month];

  return daysInMonthNonLeap[month];
}

module.exports = { countDaysInMonth };
