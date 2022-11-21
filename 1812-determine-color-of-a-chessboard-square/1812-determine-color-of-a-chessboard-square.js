/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function(coordinates) {
    const map = {};
    let flag = false;
        for (let i = 1; i <= 8; i++) {
            let char = String.fromCharCode(i + 96);
        for (let j = 1; j <= 8; j++) {
            map[char + j] = flag;
            flag = !flag;
        }
        flag = !flag; 
    }
    return map[coordinates];
};