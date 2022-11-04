/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    let ans = [] , start = newInterval[0] , end = newInterval[1] , i = 0;
    while (i < intervals.length && intervals[i][1] < start) {
        ans.push(intervals[i++]);
    }
    while (i < intervals.length && intervals[i][0] <= end) {
        start = Math.min(start, intervals[i][0]);
        end = Math.max(end, intervals[i][1]);
        i++;
    }
    ans.push([start,end])
    while (i < intervals.length) {
        ans.push(intervals[i++])
    }
    return ans;
};