/**
 * @param {number} num
 * @return {number}
 */
var smallestNumber = function(num) {
     if (num > -10 && num < 10) return num;
    
    const number = num.toString().split('');
    num > 0 ? number.sort() : number.sort((a, b) => b - a);
    let str = '';
    let leadingZeros = '';
    
    for (let i = 0; i < number.length; i++) {
        if (number[i] === '0' && str === '') leadingZeros += '0';
        else str += number[i];
    }
  
    const ans = str[0] + leadingZeros + str.slice(1);
    return +ans;
};