/**
 * 有序的（升序）整型数组 nums 和一个目标值 target
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  var left = 0,
    right = nums.length - 1;
  while (left <= right) {
    // 计算中间的索引项
    var midIndex = ((right - left) >> 1) + left;
    if (nums[midIndex] === target) {
      return midIndex;
    } else if (nums[midIndex] < target) {
      // 说明target在右侧,左指针指向中间，向右移动
      left = midIndex + 1;
    } else {
      // 说明target在右侧,右指针指向中间，向左移动
      right = midIndex - 1;
    }
  }
  // 遍历完还没找到
  return -1;
};

console.log(search([-1, 0, 3, 5, 9, 12], 9)); //4
console.log(search([-1, 0, 3, 5, 9, 12], 2)); //-1
console.log(search([5], 5)); //0
console.log(search([5], 1)); //-1
