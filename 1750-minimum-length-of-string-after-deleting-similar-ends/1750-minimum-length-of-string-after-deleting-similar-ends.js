/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function(s) {
      let st =0, char = s.length-1;
    while(st<char){
        if(s[st]===s[char]){
            while(st<char&&s[st]===s[st+1]){
                st++;
            }
            while(st<char&&s[char]===s[char-1]){
                char--;
            }
            st++;
            char--;
        }
        else{
            let length = s.substring(st,char+1).length;
            return length;
        }
    }
    if(st===char) return 1;
    return 0;
};