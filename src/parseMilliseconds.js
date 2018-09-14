// parseMs(1337000001);
// => { days: 15, hours: 11, minutes: 23, seconds: 20, milliseconds: 1 }

function parseMs(ms) {
  const time = {};
  if (ms < 0) {
    const newMs = -ms;
    time.milliseconds = -(newMs % 1000);
    time.seconds = -Math.floor((newMs % 60000) / 1000);
    time.minutes = -Math.floor((newMs % 3600000) / 60000);
    time.hours = -Math.floor((newMs % 86400000) / 3600000);
    time.days = -Math.floor((newMs / 86400000));
  } else {
    time.milliseconds = (ms % 1000);
    time.seconds = Math.floor((ms % 60000) / 1000);
    time.minutes = Math.floor((ms % 3600000) / 60000);
    time.hours = Math.floor((ms % 86400000) / 3600000);
    time.days = Math.floor((ms / 86400000));
  }
  return time;
}

module.exports = parseMs;
