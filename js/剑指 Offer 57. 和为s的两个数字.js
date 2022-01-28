/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  if (nums.length === 1) return [];
  //   先过滤掉比target还要大的元素
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    const midIndex = ((right - left) >> 1) + left;
    if (nums[midIndex] >= target) {
      right = midIndex - 1;
    } else {
      left = midIndex + 1;
    }
  }
  // 此时，left指针回退到最开始的位置，right指针已经更新了，把后面比target还要大的元素过滤了
  left = 0;
  //   指针开始计算
  while (left < right) {
    const s = nums[left] + nums[right];
    if (s === target) {
      return [nums[left], nums[right]];
    } else if (s < target) {
      left++;
    } else {
      right--;
    }
  }
  return [];
};
/**
 * 由于题目已经说了递增，那么可以考虑二分查找的方式，
 * 二分查找的方式可以减少不必要的计算
 * 思路:
 *  1. 先用二分过滤掉太大的数
 *  2. 指针重置
 *  3. 指针开始计算
 *      3.1  s = nums[left] + nums[right]
 *      3.2  s > target, 说明right太大了，right--
 *      3.3  s < target, 说明left太小了， left++
 */
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([10, 26, 30, 31, 47, 60], 40));
