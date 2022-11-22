/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    var res = "", i = null, char = k;
    if (k <= 1)
        return s;
    while (i<s.length) {
        res += s.slice(i, k).split("").reverse().join("");
        i = k;
        k += char;
        res += s.slice(i, k);
        i = k;
        k += char;
    }
    return res;
};