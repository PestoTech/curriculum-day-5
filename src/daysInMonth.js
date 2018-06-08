// Get the number of days in a given month
/* eslint-disable */
// countDaysInMonth(2016, 11); //=> 31
// countDaysInMonth(2016, 8); //=> 30

function countDaysInMonth(year, month) {
  month += 1;
  return new Date(year, month, 0).getDate();
}

module.exports = { countDaysInMonth };
