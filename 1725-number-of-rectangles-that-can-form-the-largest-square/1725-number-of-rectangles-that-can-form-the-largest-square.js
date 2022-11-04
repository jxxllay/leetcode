/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var countGoodRectangles = function(rectangles) {
    let arr = []
    rectangles.forEach( rect => {
        arr.push(Math.min(...rect))
    })
    let largest = Math.max(...arr)
    return arr.filter( l => l == largest ).length

};