/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
     let arr = bits.length;
          if(arr===1) 
            return true;
          if (bits[arr - 1] === 1)  
            return false;
     let i=0;
          while(i<arr-1){
           if(bits[i]===0) i+=1;
           else i+=2;
    }
           if(i===arr-1) return true;
            return false;
};