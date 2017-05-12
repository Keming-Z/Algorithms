/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
 // Number.toString(radix) convert integer to binary string, .match returns an array or null.
var hammingDistance = function(x, y) {
    return ((x^y).toString(2).match(/1/g) || []).length;
};