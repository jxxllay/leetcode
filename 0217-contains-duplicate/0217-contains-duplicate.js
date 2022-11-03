/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var uni = new Set(nums);
    return uni.size !== nums.length
};