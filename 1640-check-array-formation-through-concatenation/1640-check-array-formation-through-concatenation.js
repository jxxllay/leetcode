/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
var canFormArray = function(arr, pieces) {
    return pieces.every(p=> { 
        return (','+arr.join(',')+',').indexOf((','+p.join(',')+','))>-1
    });
};