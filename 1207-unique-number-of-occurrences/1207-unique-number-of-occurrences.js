/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let res = {}
        if((Array.from(new Set(arr)).length === arr.length)){
            return false
    }
        for(i of arr){
            res[i] ? (res[i] +=1) : res[i] = 1
    }
    let outlet = []
        for(i in res){
        if(outlet.includes(res[i])){
            return false
    }
        outlet.push(res[i])
}
    return res
};