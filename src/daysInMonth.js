// Get the number of days in a given month

// countDaysInMonth(2016, 11); //=> 31
// countDaysInMonth(2016, 8); //=> 30

function countDaysInMonth(year, month) {
  const date1 = new Date(year, month);
  // const date2 = new Date(year, (month + 1) % 12);
  // const date = new Date(date1 - date2);
  return date1;
}

module.exports = { countDaysInMonth };
