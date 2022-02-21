/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  if (nums.length <= 1) return false;
  const set = new Set();
  for (let index = 0; index < nums.length; index++) {
    // 移除i-k的前一个元素
    if (index > k) {
      set.delete(nums[index - k - 1]);
    }

    if (set.has(nums[index])) {
      return true;
    }
    set.add(nums[index]);
  }
  return false;
};

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3)); // true
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1)); // true
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)); // false
console.log(containsNearbyDuplicate([2, 2], 3)); // false
