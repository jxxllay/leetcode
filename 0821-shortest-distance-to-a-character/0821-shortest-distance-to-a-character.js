/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
    const res = new Array(s.length).fill(s.length);
     for(let i=0, prev=-s.length; i<s.length; i++){
        if(s[i]==c) prev=i;
        res[i]=i-prev;
    }
     for(let i=s.length-1, prev=2*s.length; i>=0; i--){
        if(s[i]==c) prev=i;
        res[i]=Math.min(res[i], prev-i);
    }
   return res;
};