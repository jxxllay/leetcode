/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function(sentence) {
    let vowels = 'aeiouAEIOU';
    let arr = sentence.split(' ')
    
        for (let i = 0; i < arr.length; i++) {
            let word = arr[i];
        if (vowels.includes(word[0])) {
            word += 'ma';
            word += 'a'.repeat(i + 1);  
            arr[i] = word;
        }
        else {
            let end = word[0];
            let updated = word.slice(1) + end + 'ma';
            updated += 'a'.repeat(i + 1);
            arr[i] = updated;
        }
    }
    return arr.join(' ')
};