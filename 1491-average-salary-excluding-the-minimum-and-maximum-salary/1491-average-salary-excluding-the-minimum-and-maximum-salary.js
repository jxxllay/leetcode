/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
      salary.sort((a,b)=>{
        return a-b
    })
    let count = 0
    let sum = 0
    for(let i=1;i<salary.length-1;i++){
        count +=1
        sum +=salary[i]
    }
    return sum/count
};