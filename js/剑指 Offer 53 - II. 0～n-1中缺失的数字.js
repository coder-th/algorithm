/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let L = 0;
  let R = nums.length - 1;
  while (L <= R) {
    const midIndex = ((R - L) >> 1) + L;
    if (nums[midIndex] === midIndex) {
      //   说明缺的在右边
      L = midIndex + 1;
    } else if (nums[midIndex] > midIndex) {
      // 在左边
      R = midIndex - 1;
    }
  }
  return L;
};

console.log(missingNumber([0, 1, 3])); //2
console.log(missingNumber([0, 1, 2, 3, 4, 5, 6, 7, 9])); //8
console.log(missingNumber([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11])); //10
console.log(missingNumber([0])); //1
