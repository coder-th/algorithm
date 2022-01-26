/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    //    固定一个数
    var cur = numbers[i];
    // 向右二分查找另外一个数
    var left = i+1,
      right = numbers.length - 1;
    while (left < right) {
      const midIndex = ((right - left) >> 1) + left;
      const rest = target - cur;
      if (numbers[midIndex] === rest) {
        // 刚好找到
        return [i + 1, midIndex + 1];
      } else if (numbers[midIndex] < rest) {
        // rest在右边
        left = midIndex + 1;
      } else {
        // rest在左边
        right = midIndex - 1;
      }
    }
  }
  return [-1, -1];
};
// console.log(twoSum([2, 7, 11, 15], 9)); //[1,2]
// console.log(twoSum([2, 3, 4], 6)); //[1,3]
// console.log(twoSum([-1, 0], -1)); //[1,2]
console.log(twoSum([1, 2, 3, 4, 4, 9, 56, 90], 8)); //[4,5]
