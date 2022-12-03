/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let j = {}
         for(const i of s){
            j[i] = (j[i] || 0) +1
        }
    let sorted = Object.entries(j).sort((a,b)=> b[1]-a[1])
    return sorted.map((e)=> e[0].repeat(e[1])).join('')
};