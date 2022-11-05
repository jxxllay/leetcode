/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    const map = new Map();
    [...new Set(arr)].sort((a, b) => a - b).forEach((x, i) => map.set(x, i + 1));
        return arr.map(x => map.get(x));
};