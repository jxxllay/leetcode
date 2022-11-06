/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
var isPrefixString = function(s, words) {
    let word = '';
        for (let i=0;i<words.length;i++) {
    word = word.concat(words[i])
        if (word === s) {
 return true
        } else {
            continue;
    }
}
return false;
};