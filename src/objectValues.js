/* eslint-disable no-unused-vars */

// objectValues({foo: 0, bar: 1});
// //=> [0, 1]
// Do not use Object.values 
function objectValues(object) {
    let blank = [];
    for (let i in object) {
        blank.push(object[i])
    }
}

module.exports = objectValues;