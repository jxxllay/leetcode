/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    const map = {};
       for (let i = 0; i < nums.length; i += 1) {
       if (map[nums[i]] === undefined) {
      map[nums[i]] = 1;
    } else {
      map[nums[i]] += 1;
    }
  }
  
  return nums.sort((a, b) => map[a] === map[b] ? (b - a) : (map[a] - map[b]));
};