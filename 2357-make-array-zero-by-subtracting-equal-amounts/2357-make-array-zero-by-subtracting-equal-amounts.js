/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
        let set = new Set(nums)
    return set.size - set.has(0);
};