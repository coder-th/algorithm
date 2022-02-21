/**
 * @param {number[][]} matrix
 */
var NumMatrix = function (matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  // base case
  if (m === 0 || n === 0) return 0;
  // 生成一个二维的前缀矩阵
  this.preSum = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
  for (i = 0; i < m; i++) {
    for (j = 0; j < n; j++) {
      this.preSum[i + 1][j + 1] =
        matrix[i][j] +
        this.preSum[i + 1][j] +
        this.preSum[i][j + 1] -
        this.preSum[i][j];
    }
  }
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
  return (
    this.preSum[row2 + 1][col2 + 1] +
    this.preSum[row1][col1] -
    this.preSum[row2 + 1][col1] -
    this.preSum[row1][col2 + 1]
  );
};
const sumRegion = new NumMatrix([
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
  [4, 1, 0, 1, 7],
  [1, 0, 3, 0, 5],
]);
/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
