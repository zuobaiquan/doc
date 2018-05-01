/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var arr = nums1.concat(nums2).sort(function(a, b) {
            return a - b;
        }),
        len = arr.length;

    if (len % 2 === 0) {
        return (arr[len / 2 - 1] + arr[len / 2]) / 2;
    } else {
        return arr[(len - 1) / 2];
    }
};
