/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    let l = [];
    let c = [...arr1];
    for (let i = 0; i < arr2.length; i++) {
        let target = arr2[i];
        for (let j = 0; j < arr1.length; j++) {
            if (arr1[j] === target) {
                l.push(arr1[j]);
                let targetIndex = c.indexOf(arr1[j]);
                if (targetIndex > -1) {
                    c.splice(targetIndex, 1);
                }
            }
        }
    }
    return [...l, ...c.sort((a, b) => a - b)];
};
