/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function(nums) {
    nums.sort((a,b) => a-b);
    let num = nums[Math.floor(nums.length/2)];
    let act = 0;
    nums.forEach(n => act+=Math.abs(num-n));
    return act;
};