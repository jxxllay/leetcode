/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
     let [min, mid]=[Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER];
    
    for(let cur of nums){
        
        if( cur <= min ){
            min = cur;
            
        }else if( cur <= mid ){
            mid = cur;
            
        }else{
            return true;
        }
    } 

    return false;
};