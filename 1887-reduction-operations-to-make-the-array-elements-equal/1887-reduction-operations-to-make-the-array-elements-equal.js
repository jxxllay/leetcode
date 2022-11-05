/**
 * @param {number[]} nums
 * @return {number}
 */
var reductionOperations = function(nums) {
   var element=0;
    nums.sort((a,b)=>a-b)
    var arr=[...new Set(nums)]
    var newArr=arr.length-1
    for(let i=nums.length-1;i>=0;i--){
        if(nums[i]===arr[newArr]){
            element=element+newArr
        }
        else{
            i++
            newArr--
        }
    }
    return element 
};