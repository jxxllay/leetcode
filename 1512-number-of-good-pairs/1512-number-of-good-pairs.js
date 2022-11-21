/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let res = null;
         for (let i = 0; i < nums.length; i++){
             for (let j = i + 1; j < nums.length; j++){
                 if (nums[i] == nums[j] & i < j) 
                     res ++;
        }
    }
    return res;
};