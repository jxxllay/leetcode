/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
        let sort = nums.sort((a, b) => b - a)
        let arr = []
        let num = 0
        for (let i = 0; i < nums.length; i++) {
            if (arr.indexOf(sort[i]) == -1 && sort[i] != undefined) {
                arr.push(sort[i])
                num++
            }
            if (num == 3)  break
        }
        if (arr.length == 1 || arr.length == 2) return arr[0]
        return arr[arr.length - 1]

};