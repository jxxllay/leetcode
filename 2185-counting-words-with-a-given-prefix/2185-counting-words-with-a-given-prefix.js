/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function(words, pref) {
    let res = 0;
    
    for (const word of words) {
        if (word.slice(0, pref.length) === pref) res++;
    }
    
    return res;
};