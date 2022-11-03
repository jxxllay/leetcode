/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count = 0, maxValue = 0;
    
    for(let i=0; i < nums.length; i++){
        if(count === 0){
            maxValue = nums[i];
        }
        count += nums[i] === maxValue ? 1 : -1;
    }
    
    return maxValue;
};