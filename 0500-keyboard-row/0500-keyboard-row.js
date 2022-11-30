/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    let first = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
    let second = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
    let third = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
    let res = [];
    
    words.forEach(x => {
        let split = x.toLowerCase().split('');
        if(split.every(j => first.includes(j))) res.push(x);
        if(split.every(j => second.includes(j))) res.push(x);
        if(split.every(j => third.includes(j))) res.push(x);
    });
    return res;
};