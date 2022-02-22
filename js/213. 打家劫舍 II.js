/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length === 1) return nums[0];
  let n = nums.length;
  //   考虑两种情况
  // 开头抢，结尾不抢
  // 开头不抢，结尾抢
  return Math.max(robRange(nums, 0, n - 2), robRange(nums, 1, n - 1));
};
/**
 * 计算 [start,end] 区间能抢到的最大
 * @param {Array} nums
 * @param {*} start
 * @param {*} end
 */
function robRange(nums, start, end) {
  let dp_i = 0,
    dp_i1 = 0,
    dp_i2 = 0;
  for (let i = end; i >= start; i--) {
    dp_i = Math.max(dp_i1, nums[i] + dp_i2);
    dp_i2 = dp_i1;
    dp_i1 = dp_i;
  }
  return dp_i;
}
console.log(rob([2, 3, 2])); //3
console.log(rob([1, 2, 3, 1])); //4
console.log(rob([1, 2, 3])); //3
