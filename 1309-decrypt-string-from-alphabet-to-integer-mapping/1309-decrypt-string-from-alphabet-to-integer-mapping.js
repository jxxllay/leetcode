/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function(s) {
    const alphabet = ' abcdefghijklmnopqrstuvwxyz';
    let res = '';
         for(let i = 0; i < s.length; i++) {
             if((i+2 < s.length) && (s[i+2] === '#')) {
               res += alphabet[s.substring(i, i+2)];
               i += 2;
           } else {
               res += alphabet[s[i]];
         }
     }
    return res;
};