/*
https://leetcode-cn.com/problems/search-insert-position/
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  var left = 0;
  var right = nums.length - 1;
  var ans = nums.length;
  while (left <= right) {
    var midIndex = ((right - left) >> 1) + left;
    var middle = nums[midIndex];
    if (target <= middle) {
      ans = midIndex;
      // 小于
      right = midIndex - 1;
    } else {
      left = midIndex + 1;
    }
  }
  return ans;
};

console.log(searchInsert([1, 3, 5, 6], 5)); //2
console.log(searchInsert([1, 3, 5, 6], 2)); //1
console.log(searchInsert([1, 3, 5, 6], 7)); // 4
console.log(searchInsert([1, 3, 5, 6], 0)); //0
console.log(searchInsert([1], 0)); //0
