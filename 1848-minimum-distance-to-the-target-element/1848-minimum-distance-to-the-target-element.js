/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
var getMinDistance = function(nums, target, start) {
       let min = Infinity;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            min = Math.min(min, Math.abs(i - start));
        }
    }
    return min;
};