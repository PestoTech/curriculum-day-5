// parseMs(1337000001);
// => { days: 15, hours: 11, minutes: 23, seconds: 20, milliseconds: 1 }

function parseMs(x) {
  return new Date(x);
}

module.exports = parseMs;
