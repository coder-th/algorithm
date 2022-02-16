/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function (nums) {
  // 同时满足两个条件
  // 1. 没有重复
  // 2. max - min < 5
  // 先进行排序操作
  nums = nums.sort((a, b) => a - b);
  // 统计大小王的张数
  let joker = 0;
  for (let i = 0; i < 4; i++) {
    if (nums[i] === nums[i + 1] && nums[i] !== 0) {
      // 有重复元素 直接返回false
      return false;
    }
    if (nums[i] === 0) {
      joker++;
    }
  }

  return nums[4] - nums[joker] < 5;
};
console.log(isStraight([1, 2, 3, 4, 5])); //true
console.log(isStraight([0, 0, 1, 2, 5])); //true
