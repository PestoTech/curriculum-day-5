// parseMs(1337000001);
// => { days: 15, hours: 11, minutes: 23, seconds: 20, milliseconds: 1 }

function parseMs(milliseconds) {
  const parseObj = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
  };

  parseObj.milliseconds = milliseconds % 1000;
  parseObj.seconds = milliseconds / 1000;
  parseObj.minutes = parseObj.seconds / 60;
  return parseObj;
}

module.exports = parseMs;
