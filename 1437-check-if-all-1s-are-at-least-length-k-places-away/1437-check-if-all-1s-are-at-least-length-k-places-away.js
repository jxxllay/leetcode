/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function(nums, k) {
    let first = false;
    let placesAway  = 0;
    for (let i = 0; i < nums.length; i++) {
        
        if (nums[i] == 1 && !first) {
            first = true;    
        } else if (nums[i] == 1) {
            if (k > placesAway)
                return false;
            placesAway = 0;
        } else if (first) {            
            placesAway++;          
        }
        
    }
    
    return true;
};