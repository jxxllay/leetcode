/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
    let res = [];
    for (let i = 0; i < n; i++) {
        if (i % 7 === 0) {
             res.push(Math.ceil(i / 7) + 1);
      } else res.push(res[i - 1] + 1);
  }
    return res.reduce((a, b) => a + b, 0);
};