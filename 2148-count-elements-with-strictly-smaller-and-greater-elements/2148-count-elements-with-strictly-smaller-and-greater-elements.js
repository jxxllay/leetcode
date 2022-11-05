/**
 * @param {number[]} nums
 * @return {number}
 */
var countElements = function(nums) {
    let count = 0
    let min = Math.min(...nums);
    let max = Math.max(...nums);
    for(let i=0;i<nums.length;i++) {
        if(nums[i]>min && nums[i]<max)
            count++;
    }
    return count;
};