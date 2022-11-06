/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function(nums) {
    let ans = -1;
    let start = 0;
    let end = 1;
    while(end<nums.length){
        if(nums[end] > nums[start])
            ans = Math.max(ans, nums[end] - nums[start]);
        else
            start = end;
        end++;
    }
    return ans;
};