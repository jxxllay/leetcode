/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function(distance, start, destination) {
     if(start> destination) [start,destination] = [destination,start]
    let all = sum(distance)
    let path = sum(distance.slice(start, destination))

    return Math.min(path, all-path)
}

    var sum = function (arr) {
      return arr.reduce((a, b) => a + b)
};