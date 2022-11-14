/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let vowels = new Set(["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"]);
    s = s.split("");
    let start = -1;
    let end = -1;
    let i = 0;
    let j = s.length - 1;
    while (i <= j) { 
        if (start == -1) {
            if (vowels.has(s[i])) {
                start = i;
            }
            
            i++;
        }

        if (end == -1) {
            if (vowels.has(s[j])) {
                end = j;
            }

            j--;
        }
        if (start != -1 && end != -1) {
            const temp = s[start];
            s[start] = s[end];
            s[end] = temp;

            start = -1;
            end = -1;
        }
    }

    return s.join("");
};