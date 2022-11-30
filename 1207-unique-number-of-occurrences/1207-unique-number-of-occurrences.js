/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const set = new Set(arr)
    const res = [];
    set.forEach(v =>  res.push(arr.filter(m => v==m).length))
    const resSet = new Set(res)
    return resSet.size === set.size
};