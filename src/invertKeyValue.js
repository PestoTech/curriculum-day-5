// invertKv({foo: 'bar', unicorn: 'rainbow'});
// => {bar: 'foo', rainbow: 'unicorn'}

function invertKeyValue(obj) {
    const invert = {};
    for (let i in obj) {
        invert[obj[i]] = i;
    }
    return invert;
}

module.exports = invertKeyValue;