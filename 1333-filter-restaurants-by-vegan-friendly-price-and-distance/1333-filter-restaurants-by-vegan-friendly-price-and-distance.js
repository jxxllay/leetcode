/**
 * @param {number[][]} restaurants
 * @param {number} veganFriendly
 * @param {number} maxPrice
 * @param {number} maxDistance
 * @return {number[]}
 */
var filterRestaurants = function(restaurants, veganFriendly, maxPrice, maxDistance) {
    const filter = item => (veganFriendly ? item[2] : 1) &&  (item[3] <= maxPrice) && (item[4] <= maxDistance) 
    const sort = (a, b)=> b[1]-a[1] || b[0] - a[0]
    return restaurants.filter(filter).sort(sort).map(item=>item[0])
};