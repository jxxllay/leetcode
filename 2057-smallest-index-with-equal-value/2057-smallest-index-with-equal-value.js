/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestEqual = function(nums) {
     let index = [];
	
    for (let i = 0; i < nums.length; i++) {
        if (i % 10 == nums[i]) {
            index.push(i);
        }
    }

    return index.length == 0 ? -1 : Math.min(...index);c
};