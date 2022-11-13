/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
   return s.split(" ").reverse().filter(e => e.length > 0).join(" ");  
};