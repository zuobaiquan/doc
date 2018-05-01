/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    var len = s.length;
    if (numRows <= 1 || numRows >= len) return s;
    var arr = [],
        row = 0,
        step = 0;
    for (var i = 0; i < len; i++) {
        if (row === 0) step = 1;
        if (row === numRows - 1) step = -1;
        arr[row] = arr[row] || '';
        arr[row] += s[i];
        row += step;
    }
    
    var result = '';
    for (i = 0; i < numRows; i++) {
        result += arr[i];
    }
    return result;
}
