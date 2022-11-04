/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
  let min = Infinity;
  let res = [];
  for (let i = 0; i < list1.length; i++) {
    let index = list2.indexOf(list1[i]);
    if (index !== -1) {
      if (min > i+index) {
        min = i+index;
        res = [list1[i]];
      } else if(min === i+index) {
        res.push(list1[i]);
      }
    }
  }
  return res;
};