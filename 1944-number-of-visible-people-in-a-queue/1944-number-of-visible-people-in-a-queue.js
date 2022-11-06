/**
 * @param {number[]} heights
 * @return {number[]}
 */
var canSeePersonsCount = function(heights) {
      let res=[],count,max=-1;
    for(let i=0;i<heights.length;i++){
        count=0,max=-1;
        for(let j=i+1; j<heights.length; j++){
            if(heights[j]>max){
                max = heights[j]; 
                count++;
            }
            if(heights[j]>heights[i]){
                break;
            }
        }
        res.push(count);
    }
    return res;
};

