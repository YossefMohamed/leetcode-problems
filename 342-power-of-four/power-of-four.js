/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    var x = (Math.log(n) / Math.log(4))
    var isPowerOfFour = Number.isInteger(x)
    return isPowerOfFour 
};