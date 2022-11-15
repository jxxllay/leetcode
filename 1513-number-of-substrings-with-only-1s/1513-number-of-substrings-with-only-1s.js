/**
 * @param {string} s
 * @return {number}
 */
var numSub = function(s) {
   let res = 0;
    let char = 0;
    for(let num of s){
        if(num==="1") char++, res+=char;
        else char = 0;
    }
    return res%1000000007; 
};