/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    nums.sort((a, b) => a - b);
    let min = 0;

    for (let num of nums) {
        min += num - nums[0];
    }

    return min;
};