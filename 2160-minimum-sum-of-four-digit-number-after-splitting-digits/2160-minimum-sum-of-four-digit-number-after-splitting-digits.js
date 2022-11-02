/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
   let nums = []
    for(let i = 0; i<4; i++){
        nums.push(~~num % 10)
        num /= 10
    }
    const sorted = nums.sort((a,b) => b - a)
    return sorted[0] + sorted[1] + (10 *( sorted[2] + sorted[3]))
};