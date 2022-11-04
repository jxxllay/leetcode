/**
 * @param {number[]} arr
 * @return {number}
 */


var findSpecialInteger = function(arr) {
  let map = new Map();
  
  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) map.set(arr[i], map.get(arr[i]) + 1);
    if (!map.has(arr[i])) map.set(arr[i], 1);
  }
  return [...map][[...map.values()].indexOf(Math.max(...map.values()))][0];
}; 