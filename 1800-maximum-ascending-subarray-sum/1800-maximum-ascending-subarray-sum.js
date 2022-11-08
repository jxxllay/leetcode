/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function(nums) {
        let pace = nums[0], sum = 0;
    for(let i=0; i<nums.length; i++){
        if(nums[i] < nums[i+1]){
            pace +=nums[i+1]
        }
        else{
            if(sum < pace){
                sum = pace;   
            }
            pace = nums[i+1];
        }
    }
    return sum
};