/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
     let list = [s[0]];
        for(let i=1; i<s.length; i+=1) {
          if (list.length && s[i] !== list[list.length - 1] && s[i].toLowerCase() === list[list.length-1].toLowerCase()) {
            list.pop();
        } 
          else {
            list.push(s[i]);
        }
    }
    return list.join('');
};