/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function (target) {
  if (target <= 1) {
    return target;
  }
  let left = 1;
  let right = 2; // 这里不用在target,因为是前面的数的累加和，如果一开始就在target，那么直接陷入死循环
  const result = [];
  /**
   * 三种情况:
   *    sum === target，当前的数left和right范围刚好满足，把这个范围的数字全部保存，加到结果
   *    sum < target,   数目还不够，说明还可以往右继续扩展,right++
   *    sum > target,   数太多了，说明这个范围不存在满足target,没办法，left继续往下走，寻找下一个范围
   */
  while (left < right) {
    const sum = getSum(left, right);
    if (sum === target) {
      const array = new Array(right - left + 1);
      for (let index = left; index <= right; index++) {
        array[index - left] = index;
      }
      result.push(array);
      left++;
    } else if (sum < target) {
      right++;
    } else {
      left++;
    }
  }
  return result;
};

function getSum(begin, end) {
  return ((end - begin + 1) * (begin + end)) >> 1;
}
console.log(findContinuousSequence(9));
console.log(findContinuousSequence(15));
