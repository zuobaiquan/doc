/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var i = 0,
        j,
        len = nums.length;
    for(; i < len; i++){
        for(j = i + 1; j < len; j++){
            if(nums[i] + nums[j] === target){
                return [i, j];
            }
        }
    }
    return null;
};

//better https://github.com/hanzichi/leetcode/blob/master/Algorithms/Two%20Sum/two-sum.js
var twoSum2 = function(nums, target) {
    var a = [];
    for (var i = 0, len = nums.length; i < len; i++) {
        var tmp = target - nums[i];
        if (a[tmp] !== undefined) return [a[tmp], i];
        a[nums[i]] = i;
    }
};
