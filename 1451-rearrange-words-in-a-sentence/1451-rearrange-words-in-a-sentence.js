/**
 * @param {string} text
 * @return {string}
 */
var arrangeWords = function(text) {
    return text
    .split(' ')
    .sort((a, b) => a.length - b.length)
    .map((e, i) => {
      if (i === 0) e = e[0].toUpperCase() + e.substring(1);
      else e = e.toLowerCase();
      return e;
    })
    .join(' ');
};