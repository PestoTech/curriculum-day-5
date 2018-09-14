// Get the number of days in a given month

// countDaysInMonth(2016, 11); //=> 31
// countDaysInMonth(2016, 8); //=> 30

function countDaysInMonth(year, month) {
  let leap = false;

  let days;
  if (year % 4 === 0) {
    leap = true;
  }

  if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 ||
    month === 10 || month === 12) {
    days = 31;
  } else if (month === 2) {
    if (leap) {
      days = 29;
    } else {
      days = 28;
    }
  } else {
    days = 30;
  }
  return days;
}

module.exports = { countDaysInMonth };
