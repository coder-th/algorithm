/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function (n) {
  let curNumber = Math.pow(10, n) - 1;
  const array = new Array(curNumber);
  for (let index = 0; index < array.length; index++) {
    array[index] = index + 1;
  }
  return array;
};
console.log(printNumbers(1));
console.log(printNumbers(2));
