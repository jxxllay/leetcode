/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    const maximum = Math.max(...nums)
    let minimum = maximum/2
    
    for(let i = 0; i < nums.length; i++){
        let found = nums.find(n => n > minimum && n !== maximum)
        if(found){
            return -1
        }else {
            return nums.indexOf(maximum)
        }
    }
};