/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  if (nums.length === 1) {
    return nums[0] === k ? 1 : 0;
  }
  let preSum = new Array(nums.length + 1).fill(0);
  // 个数
  let count = 0;
  //   记录每个前缀和出现的次数
  let map = new Map();
  //   生成一位数组的前缀和数组
  for (let index = 1; index <= nums.length; index++) {
    preSum[index] = preSum[index - 1] + nums[index - 1];
  }
  //   分别统计个数
  for (let index = 0; index < preSum.length; index++) {
    const current = preSum[index];
    const target = current - k;
    if (map.has(target)) {
      count += map.get(target);
    }
    map.set(current, map.has(current) ? map.get(current) + 1 : 1);
  }
  return count;
};
console.log(subarraySum([1, 1, 1], 2)); //2
console.log(subarraySum([1, 2, 3], 3)); //2
console.log(subarraySum([-1, -1, 1], 0)); //1
