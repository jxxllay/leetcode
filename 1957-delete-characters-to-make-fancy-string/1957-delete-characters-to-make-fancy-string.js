/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function(s) {
    let leng = s.length;
    let res = '';
        for (let i = 0; i < leng; i++) {
        if (i - 2 >= 0 && s[i - 1] == s[i - 2] && s[i] == s[i - 1]) continue;
        res += s[i];
    }
    return res;
};