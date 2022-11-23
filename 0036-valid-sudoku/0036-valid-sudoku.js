/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  for (let i = 0; i < 9; i++) {
    let s = new Set(),
        c = new Set(),
        b = new Set();

    for (let j = 0; j < 9; j++) {
      let str = board[i][j];
      let clm = board[j][i];
      let box = board[3*Math.floor(i/3)+Math.floor(j/3)][3*(i%3)+(j%3)]
      
      if (str != '.') {
        if (s.has(str)) return false;
        s.add(str);
      }
      if (clm != '.') {
        if (c.has(clm)) return false;
        c.add(clm);
      }
      
      if (box != '.') {
        if (b.has(box)) return false;
        b.add(box);
      } 
    }
  }
  return true
};