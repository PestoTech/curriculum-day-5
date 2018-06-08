// parseMs(1337000001);
// => { days: 15, hours: 11, minutes: 23, seconds: 20, milliseconds: 1 }

/* eslint-disable */

function parseMs(milli) {
  if (milli < 0) {
    milli = -milli;
  }
  let seconds = Math.floor(milli / 1000);
  let minutes = Math.floor(seconds / 60);
  seconds %= 60;
  let hours = Math.floor(minutes / 60);
  minutes %= 60;
  const days = Math.floor(hours / 24);
  hours %= 24;
  const milliseconds = Math.floor((milli % 1000) * 1000) / 1000;

  let returnedObj;
  if (milli < 0) {
    returnedObj = {
      days: -days,
      hours: -hours,
      minutes: -minutes,
      seconds: -seconds,
      milliseconds: -milliseconds,
    };
  } else {
    returnedObj = {
      days,
      hours,
      minutes,
      seconds,
      milliseconds,
    };
  }
  return returnedObj
}

module.exports = parseMs;