/**
 * @param {string[]} queries
 * @param {string[]} dictionary
 * @return {string[]}
 */
var twoEditWords = function (queries, dictionary) {
  const ans = [];
  for (let word of queries) {
    for (let dict of dictionary) {
      if (diff(word, dict)) {
        ans.push(word);
        break;
      }
    }
  }
  return ans;
};

const diff = function (one, two) {
  let count = 0;
  for (let i = 0; i < one.length; i++) {
    if (one[i] !== two[i]) {
      count++;
    }
    if (count > 2) {
      return false;
    }
  }
  return count <= 2;
};