/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    nums = nums.map(x => x * x);
	nums.sort((a, b) => a - b);

	return nums;
};