/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
        if (str1 + str2 !== str2 + str1) return '';    
    let res = "";
    let str = ""
    const length = Math.min(str1.length, str2.length);
        for(let i=1;i<=length;i++) {
        str = str2.substr(0,i);
        if((str1.length % str.length) === 0 && (str2.length%str.length) === 0)
            res = str
    }
    
    return res; 
};