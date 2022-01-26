/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  var left = 1;
  var right = n;
  while (left < right) {
    const midIndex = ((right - left) >> 1) + left;
    //    中间项的前n项和
    const sum = midIndex * (midIndex + 1);
    if (sum <= 2 * n) {
      left = midIndex + 1;
    } else {
      right = midIndex - 1;
    }
  }
  return left;
};

console.log(arrangeCoins(5)); //2
console.log(arrangeCoins(8)); //3
console.log(arrangeCoins(1804289383)); //60070
