/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    s = s.split('');
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let count = 0;
         for (let i = 0; i < s.length / 2; i++) {
             count = vowels.includes(s[i]) ? ++count : count;
    }

         for (let j = s.length / 2; j <= s.length; j++) {
             count = vowels.includes(s[j]) ? --count : count;
    }
        return count === 0;
};