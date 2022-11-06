/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var orderlyQueue = function(s, k) {
     if (k > 1) return s.split('').sort().join('');
   let str = s;
        for (let i = 0; i < s.length; i++){
   s = s.substr(1) + s[0];
        if (s < str) str = s;
    }
    return str

};