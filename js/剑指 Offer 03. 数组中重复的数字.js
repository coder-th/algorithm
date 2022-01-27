/**
 * @param {number[]} nums
 * @return {number}
 */
//ON O1
var findRepeatNumber = function (nums) {
  const swap = (i, j) => {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  };
  // 建立索引和值的映射,
  // 如果第一次遇到数字x，则将x放置在索引x处
  // 而当第二次遇到数字 xx 时，一定有 nums[x] = x ，此时即可得到一组重复数字。
  let i = 0;
  while (i < nums.length) {
    if (nums[i] === i) {
      i++;
      continue;
    }
    if (nums[i] === nums[nums[i]]) return nums[i];
    swap(i, nums[i]);
  }
  return -1;
};

function buildArray(maxLen) {
  const len = Math.floor(Math.random() * maxLen + 2);
  const array = new Array(len);
  let preNum = 0;
  for (let index = 0; index < array.length; index++) {
    const isNeedSame = Math.random() < 0.5;
    const num = isNeedSame ? preNum : Math.floor(Math.random() * len);
    array[index] = num;
  }
  return array;
}
// ON ON
function compare(array) {
  // 词频统计
  const map = new Map();
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (map.get(element)) {
      map.set(element, map.get(element) + 1);
    } else {
      map.set(element, 1);
    }
  }
  const result = [];
  for (const [key, value] of map) {
    if (value > 1) {
      result.push(key);
    }
  }
  return result;
}
function runTest() {
  const times = 10000000;
  const maxLen = 10;
  let isSuccess = true;
  for (let index = 0; index < times; index++) {
    // 生成数组
    const array = buildArray(maxLen);
    // 分别调用
    const L = findRepeatNumber(array);
    const R = compare(array);
    if (!R.includes(L)) {
      //   console.log(array, L, R);
      if (R.length === 0 && L === -1) {
        continue;
      }
      isSuccess = false;
      break;
    }
  }
  console.log(isSuccess ? "nice" : "fuck you");
}
runTest();
