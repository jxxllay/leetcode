/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
var slowestKey = function(releaseTimes, keysPressed) {
    let maxKey = "";
    let maxValue = 0;
    
    releaseTimes.unshift(0);
    
    for (let i = 0; i < keysPressed.length; i++) {
        if ((releaseTimes[i + 1] - releaseTimes[i] > maxValue) || 
            (releaseTimes[i + 1] - releaseTimes[i] == maxValue && keysPressed.charAt(i) > maxKey ))
        {
            maxKey = keysPressed.charAt(i);
            maxValue = releaseTimes[i + 1] - releaseTimes[i];
        }
    }
    
    return maxKey;
};