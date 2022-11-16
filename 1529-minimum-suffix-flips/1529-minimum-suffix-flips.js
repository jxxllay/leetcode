/**
 * @param {string} target
 * @return {number}
 */
var minFlips = function(target) {
    const leng = target.length;
    let one = false;
    let count = 0;
        for (let i = 0; i < target.length; i++) {
        const char = target.charAt(i);
        if ((char === "0" && !one) || (char === "1" && one)) continue;
        one = !one;
        count++;
    }
    
    return count;
};