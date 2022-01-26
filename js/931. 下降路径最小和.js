/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function (matrix) {
  // 状态转移方程
  //     dp[row+1][c] = Max.min( dp[r-1][c]  )
};

console.log(
  minFallingPathSum([
    [2, 1, 3],
    [6, 5, 4],
    [7, 8, 9],
  ])
); //13
console.log(
  minFallingPathSum([
    [
      [-19, 57],
      [-40, -5],
    ],
  ])
); //-59
console.log(minFallingPathSum([[[48]]])); //48
