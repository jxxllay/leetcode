/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
    let res = null;
     for(i=0;i<logs.length;i++){
          if(logs[i] === '../') {
             if(res > 0) 
                res = res - 1;
                continue
        }
        if(logs[i] === './') continue;
        else res = res + 1;
    }
    return res
};