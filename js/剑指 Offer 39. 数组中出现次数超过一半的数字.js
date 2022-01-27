/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let x = 0;
  let votes = 0;
  for (let index = 0; index < nums.length; index++) {
    if (votes === 0) {
      x = nums[index];
    }
    votes += nums[index] === x ? 1 : -1;
  }
  return x;
};
