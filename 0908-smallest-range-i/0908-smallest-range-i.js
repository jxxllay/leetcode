/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeI = function(nums, k) {
	nums = nums.sort((a,b)=>a-b);
      if (nums[0]+k < nums[nums.length-1]-k){
        return((nums[nums.length-1]-k)-(nums[0]+k));
    } else{
        return 0;
    }
      
};