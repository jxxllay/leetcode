/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
     let even = 0;
           for (let i = 0; i < nums.length; i++) {       
                if (nums[i].toString().length % 2 == 0)
            even++;         
    }
    return even;
};