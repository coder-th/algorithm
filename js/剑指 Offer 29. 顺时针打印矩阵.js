/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  if (!matrix.length || !matrix[0].length) {
    return [];
  }
  const array = [];
  let top = 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length - 1;
  while (left <= right && top <= bottom) {
    // 从左向右
    for (let index = left; index <= right; index++) {
      array.push(matrix[top][index]);
    }
    // 从上到下
    for (let index = top + 1; index <= bottom; index++) {
      array.push(matrix[index][right]);
    }
    if (left < right && top < bottom) {
      // 从右到左
      for (let index = right - 1; index > left; index--) {
        array.push(matrix[bottom][index]);
      }
      // 从下到上
      for (let index = bottom; index > top; index--) {
        array.push(matrix[index][left]);
      }
    }
    left++;
    right--;
    top++;
    bottom--;
  }
  return array;
};
console.log(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
