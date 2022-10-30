/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let value = 0;
    for (let i = 0; i < operations.length; i++) {
        if (operations[i][1] == "+")
            value++;
        else
            value--;
    }
    
    return value;
    
};