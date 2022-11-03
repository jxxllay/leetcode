/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    let morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]

    const morseWords = words.map(word => word.split('').map(char => morse[`${char}`.charCodeAt(0) - 97]).join(''))
   
    return new Set(morseWords).size
 
};