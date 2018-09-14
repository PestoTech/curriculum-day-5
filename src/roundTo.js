/* eslint-disable no-unused-vars */

/*
roundTo(1.234, 2);
//=> 1.23

roundTo.up(1.234, 2);
//=> 1.24

roundTo.down(1.234, 2);
//=> 1.23

Look at the tests for 'roundTo' for all cases
*/

function round(method, input, precision) {
}

module.exports = round.bind(null, 'round');
module.exports.up = round.bind(null, 'ceil');
module.exports.down = round.bind(null, 'floor');
