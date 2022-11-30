/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
        const res = new Array(n);
          for (let i = 1; i <= n ; i++){
          if(i % 15 === 0) res[i-1] = 'FizzBuzz';
          else if(i % 3 === 0) res[i-1] = 'Fizz';
          else if(i % 5 === 0) res[i-1] = 'Buzz';
          else res[i-1] = i.toString();
    }
    return res;
};