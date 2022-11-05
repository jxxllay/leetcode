/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
  let nums=new Set(arr);
  let num1=[...nums].sort((a,b)=>(a-b));
   let newArr=[];
    for(i=0;i<arr.length;i++){
        newArr.push(num1.indexOf(arr[i])+1)
    }
    return newArr
};