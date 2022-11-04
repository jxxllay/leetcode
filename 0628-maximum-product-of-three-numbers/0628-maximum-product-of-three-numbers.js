/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    nums=nums.sort((a,b)=>a-b);
    let arr=nums.length;

    let l = nums[arr-3]*nums[arr-2]*nums[arr-1];
    
    let j= nums[0]*nums[1]*nums[arr-1];
    
    return Math.max(l,j);
};