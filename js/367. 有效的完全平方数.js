/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  var left = 1,
    right = num;
  while (left < right) {
    const midIndex = ((right - left) >> 1) + left;
    if (midIndex * midIndex === num) {
      return true;
    } else if (midIndex * midIndex < num) {
      left = midIndex + 1;
    } else {
      // 要找的数在左边
      right = midIndex - 1;
    }
  }
  return left * left === num;
};

console.log(isPerfectSquare(16)); //true
console.log(isPerfectSquare(14)); //false
console.log(isPerfectSquare(1)); //true
// console.log(isPerfectSquare(0)); //true
