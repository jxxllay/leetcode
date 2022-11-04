/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    const output = [];
    let index = 0;
    while(index < nums.length) {
        let start, end;
        start = nums[index];
        while(index+1 < nums.length && nums[index+1] == nums[index] + 1) 
            index++;
        end = nums[index];
        if(start == end)
            output.push(start + "");
        else
            output.push( start + "->" + end );
        index++;          
    }
    return output;   
};