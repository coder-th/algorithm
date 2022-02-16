/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  if (!nums.length) return 0;
  const binarySearch = (nums, target) => {
    // 二分查找这个数
    let L = 0;
    let R = nums.length - 1;
    while (L <= R) {
      const midIndex = ((R - L) >> 1) + L;
      if (nums[midIndex] <= target) {
        L = midIndex + 1;
      } else {
        R = midIndex - 1;
      }
    }
    return L;
  };
  const start = binarySearch(nums, target - 1);
  const end = binarySearch(nums, target);

  return end - start;
};
console.log(search([5, 7, 7, 8, 8, 10], 8)); //2
console.log(search([5, 7, 7, 8, 8, 10], 6)); //0
