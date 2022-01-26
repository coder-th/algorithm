/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    var left = 0,
      right = n - 1;
    while (left < right) {
      const midIndex = ((right - left) >> 1) + left;
      if (isBadVersion(midIndex)) {
        // 第一个错误在左边
        right = midIndex;
      } else {
        // 右边
        left = midIndex + 1;
      }
    }
    // 缩成一个点就是答案
    return left;
  };
};
const bad = 4;
function isBadVersion(version) {
  return version >= bad;
}

console.log(solution(isBadVersion)(3)); // false
console.log(solution(isBadVersion)(5)); // true
console.log(solution(isBadVersion)(4)); // true
