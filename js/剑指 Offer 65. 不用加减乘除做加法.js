/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var add = function (a, b) {
  // 当进位和为0了，直接返回无进位和
  if (b === 0) {
    return a;
  }
  // 无进位和
  const sum = a ^ b;
  // 进位和
  const carry = (a & b) << 1;
  return add(sum, carry);
};
var substration = function (a, b) {
  // 当进位和为0了，直接返回无进位和
  if (b === 0) {
    return a;
  }
  // 取b的补码
  b = -b;
  // 无进位和
  const sum = a ^ b;
  // 进位和
  const carry = (a & b) << 1;
  return substration(sum, carry);
};
console.log(add(1, 20));
console.log(substration(1, 20));

