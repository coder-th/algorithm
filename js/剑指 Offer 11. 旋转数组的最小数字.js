/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function (numbers) {
  if (!numbers.length) return null;
  if (numbers.length === 1) {
    return numbers[0];
  }
  let L = 0;
  let R = numbers.length - 1;
  while (L < R) {
    const midIndex = ((R - L) >> 1) + L;
    if (numbers[midIndex] > numbers[R]) {
      L = midIndex + 1;
    } else if (numbers[midIndex] < numbers[R]) {
      R = midIndex;
    } else {
      R--;
    }
  }
  return numbers[L];
};
function buildArray(maxLen, maxVal) {
  const len = Math.floor(Math.random() * maxLen + 1);
  let array = new Array(len);
  // 保存上一次生成的数
  let preNums = -1;
  for (let index = 0; index < array.length; index++) {
    let curNums = null;
    do {
      curNums = Math.floor(Math.random() * maxVal + 1);
    } while (curNums < preNums);
    array[index] = curNums;
    preNums = curNums;
  }
  // 是否需要旋转
  const isNeedRotate = Math.random() < 0.9;

  if (isNeedRotate) {
    // 从哪里开始旋转
    const rotateIndex = Math.floor(Math.random() * len) + 1;
    const tail = array.splice(rotateIndex);
    array = [...tail, ...array];
  }
  return array;
}
function compare(array) {
  if (!array.length) return null;
  let result = Number.MAX_SAFE_INTEGER;
  for (let index = 0; index < array.length; index++) {
    result = Math.min(result, array[index]);
  }
  return result;
}
function runTest() {
  const testTimes = 10000;
  const maxLen = 10;
  const maxVal = 100;
  let isSuccess = true;
  for (let index = 0; index < testTimes; index++) {
    // 生成数组
    const array = buildArray(maxLen, maxVal);
    // 调用不同的方法
    const L = minArray(array);
    const R = compare(array);
    if (L !== R) {
      isSuccess = false;
      break;
    }
  }
  console.log(isSuccess ? "nice" : "fuck you");
}
runTest();
// console.log(minArray([3, 4, 5, 1, 2])); //1
// console.log(minArray([3, 4, 0, 1, 2])); //0
// console.log(minArray([3, 4, 5, 6, 2])); //2
// console.log(minArray([3, 4, 1, 1, 2])); //1
