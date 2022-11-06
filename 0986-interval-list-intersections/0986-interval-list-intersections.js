/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function(firstList, secondList) {
    let i = 0, j = 0;
	const arr = [];

	while (i <firstList.length && j < secondList.length) {
		const start = Math.max(firstList[i][0], secondList[j][0]);
		const end = Math.min(firstList[i][1], secondList[j][1]);
		
		if (start <= end) {
            arr.push([start, end]);
        }

        firstList[i][1] === end ? i++ : j++;
	}

	return arr;
};