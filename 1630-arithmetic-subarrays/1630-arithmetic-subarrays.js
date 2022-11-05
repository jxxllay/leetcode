/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function(nums, l, r) {
     let ans = [];
           for(let i=0;i<l.length;i++) {
     let sec = [...nums].slice(l[i], r[i]+1);
         sec = sec.sort((a,b) => a-b);
     let diff = sec[1]-sec[0];
     let num = true
           for(let j=0;j<sec.length-1;j++) {
             if(!(sec[j+1]-sec[j] == diff))
                num = false
        }
        ans.push(num)
    }
    return ans
};