/* eslint-disable no-param-reassign */
// parseMs(1337000001);
// => { days: 15, hours: 11, minutes: 23, seconds: 20, milliseconds: 1 }

const msInSec = 1000;
const msInMin = msInSec * 60;
const msInHour = msInMin * 60;
const msInDay = msInHour * 24;

function parseMs(ms) {
  let modifier = 1;
  if (ms < 0) {
    modifier = -1;
    ms = -ms;
  }

  const days = Math.floor(ms / msInDay);
  ms -= days * msInDay;

  const hours = Math.floor(ms / msInHour);
  ms -= hours * msInHour;

  const minutes = Math.floor(ms / msInMin);
  ms -= minutes * msInMin;

  const seconds = Math.floor(ms / msInSec);
  ms -= seconds * msInSec;

  return {
    days: days * modifier,
    hours: hours * modifier,
    minutes: minutes * modifier,
    seconds: seconds * modifier,
    milliseconds: ms * modifier,
  };
}

module.exports = parseMs;
