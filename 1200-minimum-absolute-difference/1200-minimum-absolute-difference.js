/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    arr = arr.sort((a, b) => a - b)
    let absolute  = []
    let min = arr[1] - arr[0]

    for (let i = 1; i < arr.length - 1; i++) {
        if (arr[i + 1] - arr[i] < min) {
            min = arr[i + 1] - arr[i]
            absolute  = []
        }
        if (arr[i + 1] - arr[i] == min) absolute .push([arr[i], arr[i + 1]])
    }

    if (min == arr[1] - arr[0]) absolute .unshift([arr[0], arr[1]])
	
    return absolute 
};