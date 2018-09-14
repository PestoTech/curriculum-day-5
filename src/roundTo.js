/* eslint-disable no-unused-vars */
/* eslint-disable indent */

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
    let roundedNum = input;
    const preciseNum = input * (10 ** precision);

    if (method === 'round') {
        roundedNum = Math.round(preciseNum) / (10 ** precision);
    } else if (method === 'ceil') {
        roundedNum = Math.ceil(preciseNum) / (10 ** precision);
    } else if (method === 'floor') {
        roundedNum = Math.floor(preciseNum) / (10 ** precision);
    }
    return roundedNum;
}

module.exports = round.bind(null, 'round');
module.exports.up = round.bind(null, 'ceil');
module.exports.down = round.bind(null, 'floor');
