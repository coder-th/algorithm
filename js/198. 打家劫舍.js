/**
 * @param {number[]} nums
 * @return {number}
 */
var rob1 = function (nums) {
  // base case
  if (nums.length === 1) return nums[0];
  /**
   * 获取第几位开始后的能抢的最大值
   * @param {*} nums
   * @param {*} start 第几位抢的最大值
   */
  const process = function (nums, start) {
    //   抢到没有了
    if (start >= nums.length) return 0;
    let ans = Math.max(
      //当前位置不抢，到下家
      process(nums, start + 1),
      // 当前位置抢，到下下家
      nums[start] + process(nums, start + 2)
    );
    return ans;
  };
  return process(nums, 0);
};
function rob(nums) {
  // base case
  if (nums.length === 1) return nums[0];
  const dp = new Array(nums.length + 2).fill(0);
  for (let i = nums.length - 1; i >= 0; i--) {
    dp[i] = Math.max(
      //当前位置不抢，到下家
      dp[i + 1],
      // 当前位置抢，到下下家
      nums[i] + dp[i + 2]
    );
  }
  return dp[0];
}

function rob(nums) {
  // base case
  if (nums.length === 1) return nums[0];
  let dp_i = 0,
    dp_i1 = 0,
    dp_i2 = 0;
  for (let i = nums.length - 1; i >= 0; i--) {
    dp_i = Math.max(
      //当前位置不抢，到下家
      dp_i1,
      // 当前位置抢，到下下家
      nums[i] + dp_i2
    );
    dp_i2 = dp_i1;
    dp_i1 = dp_i;
  }
  return dp_i;
}

console.log(rob([1, 2, 3, 1])); //4
console.log(rob([2, 7, 9, 3, 1])); //12
