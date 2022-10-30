/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function(widths, s) {
    let a= 'a'.charCodeAt();
    let l=1;
    let sum=0;
 
   let arr = s.split('').map(x=>widths[x.charCodeAt()-a]);
   
   for(let i=0; i< arr.length; i++){
       if(sum <=100){
           sum += arr[i];
       } 
       if(sum >100){          
          l++;
           sum= arr[i];
       }
   }
   
   return [l,sum];
};
