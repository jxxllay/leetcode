/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
    let winners = new Set();                
    let losers = new Map();               
         for (let [i, k] of matches) {
              winners.add(i);
              winners.add(k);
              losers.set(k, (losers.get(k) || 0) + 1);
        }
    let res = [[], []];              
         for (let x of winners) {
             if (losers.has(x) === false) res[0].push(x);
             if (losers.get(x) === 1)     res[1].push(x);
    }
    return res.map((arr) => arr.sort((a, b) => a - b));
};