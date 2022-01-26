/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  var left = 0;
  var right = nums.length - 1;
  const sortedArray = [];
  while (left <= right) {
    const leftPow = Math.pow(nums[left], 2);
    const rightPow = Math.pow(nums[right], 2);
    if (leftPow <= rightPow) {
      sortedArray.unshift(rightPow);
      right--;
    } else {
      sortedArray.unshift(leftPow);
      left++;
    }
  }
  return sortedArray;
};

console.log(sortedSquares([-4, -1, 0, 3, 10])); //[0,1,9,16,100]
console.log(sortedSquares([-7, -3, 2, 3, 11])); //[4,9,9,49,121]
console.log(sortedSquares([-5, -3, -2, -1])); //[1,4,9,25]
