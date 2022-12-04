/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function(sentence) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return sentence
		.split(' ')
        .map((word, i) => vowels.includes(word[0].toLowerCase()) ? 
             [...word, 'ma', ...Array(i + 1).fill('a')].join('') 
             : 
             [...word.slice(1), word[0], 'ma', ...Array(i + 1).fill('a')].join(''))
        .join(' '); 
};