/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
var percentageLetter = function(s, letter) {
    s = s.split(''), count = 0
         for (let i = 0; i < s.length; i++) {
             s[i] === letter ? count++ : ''
    }
    return Math.floor(count * 100 / s.length)
};