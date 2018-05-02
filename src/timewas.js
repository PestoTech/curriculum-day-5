// Generate a relative time string (Example: "3 seconds ago")
// console.log(timewas(Date.now() - (5 * 1000));
// -> 5 seconds ago

function timewas(time, now) {
  return time + now;
}

module.exports = {
  timewas,
};
