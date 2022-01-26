/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */
const data = {
  10: 6,
  1: 1,
  2: 1,
};
var guess = function (num) {
  const pick = 6;
  if (pick === num) {
    return 0;
  } else if (pick < num) {
    return -1;
  } else {
    return 1;
  }
};
/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  var left = 1,
    right = n;
  while (left < right) {
    const midIndex = ((right - left) >> 1) + left;
    if (guess(midIndex) === 0) {
      // 猜中了
      return midIndex;
    } else if (guess(midIndex) === -1) {
      // 猜的数太大了
      right = midIndex - 1;
    } else {
      // 太小了
      left = midIndex + 1;
    }
  }
  // 缩成一个点了
  return left;
};

console.log(guessNumber(10)); //6
console.log(guessNumber(1)); //1
console.log(guessNumber(2)); //1
