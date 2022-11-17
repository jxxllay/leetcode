/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function(s) {
     let ans = ''
          for (let i = 0; i < s.length; i++) {
          while (s[i] === s[i + 1] && s[i] === s[i + 2]) {
      i++
    } 
      ans += s[i]
  }
  return ans
};