/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    var start = 0,
        end = 0;
    for (var i = 0, length = s.length; i < length; i++) {
        var len1 = expand(s, i, i);
        var len2 = expand(s, i, i + 1);
        var len = Math.max(len1, len2);
        if (len > end - start) {
            start = i - ~~((len - 1) / 2);
            end = i + ~~(len / 2);
        }
    }
    return s.substring(start, end + 1);
};

function expand(s, left, right) {
    while (left >= 0 && right < s.length && s[left] == s[right]) {
        left--;
        right++;
    }
    return right - left - 1;
}
