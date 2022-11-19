/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let arr = []
    const max = Math.max(word1.length, word2.length)
         for(let i = 0; i < max; i++){
          word1[i] && arr.push(word1[i])
          word2[i] && arr.push(word2[i])
    }
    return arr.join("")
};

