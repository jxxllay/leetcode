/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function(code, k) {
    const res = []
    const isNegative = k < 0
    k = Math.abs(k)
    
    for(let i=0; i<code.length; i++) {
        let sum = 0
        let num=i
        
        for(let j=0; j<k; j++) {
            if(isNegative) {
                num--            
            } else {
                num++
            }
            
            if(num === code.length) {
                num = 0
            }
            if(num === -1) {
                num = code.length - 1
            }
            
            sum += code[num]
        }
        
        res.push(sum)
    }
    
    return res
};