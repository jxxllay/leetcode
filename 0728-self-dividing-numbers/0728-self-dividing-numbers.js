/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
     let arr = []
         while(left <= right) arr.push(left++)
     return arr.filter(num => {
           if(String(num).includes("0")) 
               return false
           let arrNum = String(num).split("")
     for(let i = 0; i < arrNum.length; i++){
           if(num % parseInt(arrNum[i]) !== 0)
               return false
        }
        return true
    })
};