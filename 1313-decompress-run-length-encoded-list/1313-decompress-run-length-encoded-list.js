/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    let arr = [];
    
    for(let i=0;i<nums.length;i=i+2){
        const freq = nums[i]
        const value = nums[i+1];
        arr= [ ...arr, ...Array(freq).fill(value) ]
    }
    
    return arr
};