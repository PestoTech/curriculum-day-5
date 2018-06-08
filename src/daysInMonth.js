// Get the number of days in a given month

// countDaysInMonth(2016, 11); //=> 31
// countDaysInMonth(2016, 8); //=> 30

function countDaysInMonth(year, month) {
  const days = Number(new Date(year, month + 1).toISOString().substr(8, 2));
  //  return new Date(year, month).getDate();
  return days;
}

module.exports = { countDaysInMonth };
