/**
 * @param {number} x
 * @return {number}
 */
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  //     在升序数列中进行二分查找到num  num*num最接近8
  var left = 0,
      right = x,
      ans = -1;
  while (left <= right) {
    const midIndex = ((right - left) >> 1) + left;
    const cur = midIndex*midIndex
    if (cur <= x) {
      ans =midIndex;
      // 要找的值在右边
      left = midIndex + 1;
    } else {
      // 要找的值在左边
      right = midIndex - 1;
    }
  }
  return ans;
};

console.log(mySqrt(8)); //2
console.log(mySqrt(7)); //2
console.log(mySqrt(4)); //2
console.log(mySqrt(9)); //3
console.log(mySqrt(100)); //10
console.log(mySqrt(1)); //1
console.log(mySqrt(0)); //0
