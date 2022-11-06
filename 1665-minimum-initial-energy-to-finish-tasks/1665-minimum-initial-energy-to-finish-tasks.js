/**
 * @param {number[][]} tasks
 * @return {number}
 */
var minimumEffort = function(tasks) {
    let min = 0;
    let cur = 0;
  
  tasks.sort((a, b) => (b[1] - b[0]) - (a[1] - a[0]) );
  
  for (let task of tasks) {
    if (task[1] > cur) {
      min += (task[1] - cur);
      cur = task[1];
    }
    cur -= task[0];
  }
  
  return min;
};