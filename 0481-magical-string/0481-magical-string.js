/**
 * @param {number} n
 * @return {number}
 */
var magicalString = function(n) {
	const arr = ['1', '2', '2'];
	let magical = 2;

	while (arr.length < n) {
		const count = arr[magical++];
		const end = arr[arr.length - 1];
		const s = end === '1' ? '2' : '1';

		for (let n = 1; n <= count; n++) arr.push(s);
	}
	return arr.slice(0, n).filter(str => str === '1').length;
};