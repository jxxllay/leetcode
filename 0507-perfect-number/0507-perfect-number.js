/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
     if (num < 6)
			return false;
		else {
			let sum = 1;
			for (let i = 2; i*i < num; i++) {
				if (num % i == 0) {
					sum = sum + i + num / i;					
				}
			}
			if (sum == num)
				return true;
			else
				return false;
        }
};