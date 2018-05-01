/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    return x >= 0 && x === reverse(x);
};

function reverse(x) {
    var y = 0;
    var n;
    while (x !== 0) {
        n = x % 10;
        if (y > 2147483647 / 10 || y < -2147483648 / 10) {
            return 0;
        }
        y = y * 10 + n;
        x = ~~(x / 10);
    }
    return y;
}
