/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let res = [];
    
    for(let i=0; i<nums1.length;i++){
        for(let j =0; j<nums2.length;j++){
            if(nums1[i]===nums2[j]){
                res.push(nums1[i])
                nums2.splice(j, 1);
                break;
            }
        }
    }
    
    return res 
};