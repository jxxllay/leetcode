/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    if (!candidates || candidates.length === 0) return []
    candidates.sort((a, b) => a-b)
    return dfs(candidates, target)
};

const dfs = (candidates, target, arr = [], index = 0, carry = []) => {
    if (target === 0) return arr.push([...carry])
    if (target < 0) return arr
    for (let i = index; i < candidates.length; i++) {
        dfs(candidates, target - candidates[i], arr, i+1, [...carry, candidates[i]])
        while(i < candidates.length-1 && candidates[i] === candidates[i+1]) i++
    }
    return arr
}