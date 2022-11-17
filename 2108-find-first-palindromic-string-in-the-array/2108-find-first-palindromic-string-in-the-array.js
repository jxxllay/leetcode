/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
        for(let i = 0; i < words.length; i++ ){

    let word = words[i].split("").reverse().join("");
         if(word === words[i]){
        return word;
    }
}
    return "";
};