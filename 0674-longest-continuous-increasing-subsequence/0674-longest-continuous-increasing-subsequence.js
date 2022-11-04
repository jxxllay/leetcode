/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    let curr = 1;
    let max = 0;
  
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < nums[i + 1]) curr++;
    if (curr > max) max = curr;
    if (nums[i] >= nums[i + 1]) curr = 1;
  }
  
  return max;
};