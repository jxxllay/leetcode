/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    let max = -Infinity;
    let end = -1;
    
    for (let i = arr.length - 1 ; i >= 0; i --) {
        max = Math.max(arr[i], end);
        arr[i] = end;
        end = max;
    }
    return arr;
};