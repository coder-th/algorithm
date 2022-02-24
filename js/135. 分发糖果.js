/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  /**
   * 本题的思路是利用左右坡度进行计算
   */
  const n = ratings.length;
  const left = new Array(n).fill(0);
  const right = new Array(n).fill(0);
  let res = 0;
  // 生成左坡(从左往右)
  for (let i = 0; i < n; i++) {
    if (i > 0 && ratings[i] > ratings[i - 1]) {
      left[i] = left[i - 1] + 1;
    } else {
      left[i] = 1;
    }
  }
  // 生成右坡(从右往左)
  for (let i = n - 1; i >= 0; i--) {
    if (i < n - 1 && ratings[i] > ratings[i + 1]) {
      right[i] = right[i + 1] + 1;
    } else {
      right[i] = 1;
    }
  }

  for (let i = 0; i < n; i++) {
    res += Math.max(left[i], right[i]);
  }

  return res;
};
console.log(candy([1, 0, 2])); //5
console.log(candy([1, 2, 2])); //4
