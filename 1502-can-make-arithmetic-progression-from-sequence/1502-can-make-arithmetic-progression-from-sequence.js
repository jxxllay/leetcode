/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
      if(arr.length <= 2) return true
    const sorting = arr.sort((a,b) => a-b)
    const diff = sorting[1] - sorting[0]
      for(let i = 2; i<sorting.length; i++){
        if(sorting[i] - sorting[i-1] !== diff) 
            return false
    }
    return true
};