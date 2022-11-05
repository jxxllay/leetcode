/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortEvenOdd = function(nums) {
    let pace;
    for(let i = 0; i<nums.length;i += 2){
    for(let i = 0; i<nums.length;i += 2){
       if(nums[i+2] !== undefined) {
           if(nums[i] >= nums[i+2]) {
               pace = nums[i+2];
               nums[i+2] = nums[i];
               nums[i] = pace;
           }
       }
    }
}
for(let i = 1; i<nums.length;i += 2){    
    for(let i = 1; i<nums.length;i += 2){
       if(nums[i+2] !== undefined) {
           if(nums[i] <= nums[i+2]) {
               pace = nums[i+2];
               nums[i+2] = nums[i];
               nums[i] = pace;
           }
       }
    }
}
    return nums;
};