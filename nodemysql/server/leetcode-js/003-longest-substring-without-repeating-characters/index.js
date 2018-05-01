/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {

    var longest = 0,
        pos = -1,
        map = {};
    for (var i = 0, len = s.length; i < len; i++) {
        if (map[s[i]] !== undefined && pos < map[s[i]]) {
            pos = map[s[i]]
        }
        if (i - pos > longest) {
            longest = i - pos
        }
        map[s[i]] = i
    }
    return longest;
};
