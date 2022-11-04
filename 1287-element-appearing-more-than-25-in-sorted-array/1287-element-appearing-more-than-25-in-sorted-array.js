/**
 * @param {number[]} arr
 * @return {number}
 */
const findSpecialInteger = A => A.filter(n => ((A.lastIndexOf(n) - A.indexOf(n) + 1) / (A.length + 1) >= 0.25))[0]
