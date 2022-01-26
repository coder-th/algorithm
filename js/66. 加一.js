/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  var len = digits.length;
  for (let i = len - 1; i >= 0; i--) {
    digits[i] = (digits[i] + 1) % 10;
    // 如果digits[i]不等于0，说明原先digits[i] !== 9,直接加1就结束,相反，说明为9，需要前面继续加一
    if (digits[i] !== 0) {
      return digits;
    }
  }
  // 这种情况是，所有数字都为9，需要增加一位，其他全为0即可
  digits = new Array(digits.length + 1).fill(0);
  digits[0] = 1;
  return digits;
};
console.log(plusOne([1, 2, 3])); //[1,2,4]
console.log(plusOne([4, 3, 2, 1])); //[4,3,2,2]
console.log(plusOne([0])); //[1]
