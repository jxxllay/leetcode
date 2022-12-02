/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
    let count = null;
        for (let i = 1, k; i<s.length; i++) {
        if (s[i]!=s[i-1]) {
            count++; 
            k=1;
        while (i>=0 && i<s.length && s[i]===s[i+k] && s[i-1]===s[i-1-k]){
           k++;
           count++;
         }
       }
    }
  return count;
};