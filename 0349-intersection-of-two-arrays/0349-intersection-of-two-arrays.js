/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let n1 = nums1.length;
    let n2 = nums2.length;
    let nums= [];
    
    let min;
    let max;
    
    if(n1 < n2){
        min = nums1;
        max = nums2;
    }else{
        min = nums2;
        max = nums1;
    }
    
    for(let i = 0; i < min.length; i++){
        
        if(max.indexOf(min[i]) != -1 && nums.indexOf(min[i]) == -1){
            nums.push(min[i]);
        }
    }
    
    return nums;
};