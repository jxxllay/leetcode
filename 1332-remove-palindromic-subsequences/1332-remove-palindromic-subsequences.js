/**
 * @param {string} s
 * @return {number}
 */
var removePalindromeSub = function(s) {
     if(s ==='')
         return 0;
     else if (s===s.split('').reverse().join(''))   
         return 1;
     else 
         return 2;
};