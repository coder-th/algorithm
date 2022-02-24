/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  // 当前走的步数
  let step = 0;
  // 当前步数能够走到的最右位置
  let curMaxRight = 0;
  // 下一步能够走到的最右位置
  let nextMaxRight = 0;
  for (let i = 0; i < nums.length; i++) {
    // 如果当前已经走到最右位置的下一位
    if (i > curMaxRight) {
      // 步数+1，更新最右位置
      step++;
      curMaxRight = nextMaxRight;
    }
    // 不断计算下一步能够走到的最右位置
    nextMaxRight = Math.max(nextMaxRight, i + nums[i]);
  }

  return step;
};
console.log(jump([2, 3, 1, 1, 4])); //2
console.log(jump([2, 3, 0, 1, 4])); //2
