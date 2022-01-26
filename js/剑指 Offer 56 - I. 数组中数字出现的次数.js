/**
 * https://www.bilibili.com/video/BV1ZP4y1J7LN?p=3
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumbers = function (nums) {
  // 先将所有的数进行异或运算
  let xor = 0;
  for (let index = 0; index < nums.length; index++) {
    xor ^= nums[index]; // xor这里就是那两个不同的数的异或结果
  }
  // 到了这里，问题就是，我要怎么区分出来，这两个不同的数
  // 计算出xor最后一为个1的数
  // xor: 011010100
  // rightOne: 000000100
  let rightOne = xor & -xor;
  let onlyOne = 0;
  for (let index = 0; index < nums.length; index++) {
    if ((nums[index] & rightOne) !== 0) {
      // 说明nums[index]最右侧1跟rightOne一样
      // 进行异或，最后的结果就是，将其中一个数异或弄掉
      onlyOne ^= nums[index];
    }
  }
  return [onlyOne, xor ^ onlyOne];
};

console.log(singleNumbers([4, 1, 4, 6])); // [1,6] 或 [6,1]
console.log(singleNumbers([1, 2, 10, 4, 1, 4, 3, 3])); // [2,10] 或 [10,2]
const xor = 5;
console.log(xor & -xor);
