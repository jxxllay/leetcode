/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function(points) {
    var ans = 0;
    var width = new Array();
    for(let i=0;i<points.length;i++) width.push(points[i][0]);
    width = width.sort((a,b)=>b-a);
    for(let i=0;i<width.length-1;i++)
        ans = (width[i]-width[i+1])>ans?(width[i]-width[i+1]):ans;
    return ans;
};