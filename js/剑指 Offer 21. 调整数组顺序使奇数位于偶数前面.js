/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function (nums) {
  if (nums.length <= 1) {
    return nums;
  }
  let left = 0;
  let right = nums.length - 1;
  const swap = (i, j) => {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  };
  while (left < right) {
    if (nums[left] % 2 === 0) {
      swap(left, right);
      right--;
    } else {
      left++;
    }
  }
  return nums;
};

function buildArray(maxLen, maxVal) {
  const len = Math.floor(Math.random() * maxLen + 1);
  const array = new Array[len]();
  for (let index = 0; index < array.length; index++) {
    array[index] = Math.floor(Math.random() * maxVal + 1);
  }
  return array;
}
function isEqual(L, R) {
  if (L.length !== R.length) {
    return false;
  }
  let isSame = true;
  for (let index = 0; index < L.length; index++) {
    if (L[index] !== R[index]) {
      isSame = false;
      break;
    }
  }
  return isSame;
}

function runTest() {
    let testTimes = 10000
    let maxLen = 50000;
    let maxVal = 10000;
    for (let index = 0; index < testTimes; index++) {
      const array = buildArray(maxLen,maxVal)
      const L = exchange(array)
      
    }
}
console.log(exchange([1, 2, 3, 4, 5]));
