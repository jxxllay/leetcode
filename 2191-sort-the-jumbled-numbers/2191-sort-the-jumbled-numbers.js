/**
 * @param {number[]} mapping
 * @param {number[]} nums
 * @return {number[]}
 */
var sortJumbled = function(mapping, nums) {
     let maps = []
    nums.forEach((num, index) => {
        let str = ''
        if (num === 0) str = mapping[0]

        while (num > 0) {
            str = mapping[num % 10] + str
            num = Math.floor(num / 10)
        }
        
        maps.push([Number(str), nums[index]]) 
    })

    maps.sort((n1, n2) => n1[0] - n2[0])
    return maps.map(num => num[1])
};