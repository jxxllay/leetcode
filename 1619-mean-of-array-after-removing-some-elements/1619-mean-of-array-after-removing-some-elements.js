/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function(arr) {
    arr.sort((a,b) => a-b);
    let all = 0;
    const remove = Math.round(arr.length * .05);
    for (let i = remove; i < arr.length - remove; i++) {
        all += arr[i]
    }
    return all / (arr.length - 2 * remove);
};