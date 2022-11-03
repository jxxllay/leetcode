/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
         let sort = nums.sort((a,b) => b-a)
         return sort[k-1]
 };