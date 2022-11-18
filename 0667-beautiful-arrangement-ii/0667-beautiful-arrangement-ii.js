/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var constructArray = function(n, k) {
    const list = [];
    let i = 1;
    let j = n;
          while (i <= j) {    
            if (k <= 1 || k-- % 2) {
                list.push(i++);
          } else {
                list.push(j--);
        }
    }
    return list;   
};