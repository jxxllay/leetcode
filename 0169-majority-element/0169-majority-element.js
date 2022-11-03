/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
   let frequency={}
   let count=0;
   for(i=0;i<nums.length;i++){
      if(frequency[nums[i]]==undefined){
        frequency[nums[i]]=1       
}
      else{
    frequency[nums[i]]+=1  
}
       if(frequency[nums[i]]>nums.length/2){
    return nums[i];
   }
  }
};