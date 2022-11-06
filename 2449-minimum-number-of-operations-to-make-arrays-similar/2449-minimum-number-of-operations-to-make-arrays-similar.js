/**
 * @param {number[]} nums
 * @param {number[]} target
 * @return {number}
 */
var makeSimilar = function(nums, target) {
    let sortNums = nums.sort((a, b) => a % 2 - b % 2 || a - b);
    let sortTarget = target.sort((a, b) => a % 2 - b % 2 || a - b);
    
    let sum = 0;
    
       for(let i = 0; i < nums.length; i++) {
        sum += Math.abs(sortNums[i] - sortTarget[i]);
    }
    
    return sum / 4;
};