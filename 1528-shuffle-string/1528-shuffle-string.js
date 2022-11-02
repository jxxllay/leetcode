/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    var lgth = indices.length;
    var str = new Array(lgth);     
    for(let i=0; i<lgth;i++){
        str[indices[i]] = s[i];
    }
    return str.join("");  
};