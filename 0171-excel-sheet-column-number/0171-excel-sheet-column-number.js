/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    let res = 0; 
    let leng = columnTitle.length;
    
    for(let i = 0; i < leng; i++){
        res = res * 26; 
        res += (columnTitle.charCodeAt(i) - "A".charCodeAt(0) + 1);
    }
    
    return res;
};