/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var s = x + '';
    if (s[0] !== '-') {
        s = '+' + s;
    }
    var result = s[0];
    for (var i = 1, len = s.length; i < len; i++) {
        result += s[len - i];
    }
    result = +result;
    if (result > 2147483647 || result < -2147483648) {
        return 0;
    }
    return result;
};
