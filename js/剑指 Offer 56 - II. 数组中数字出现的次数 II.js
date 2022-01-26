/**
 * 一种数出现了k次，其他的数都是出现m次
 * 找出那个数
 * @param {number[]} nums
 * @return {number}
 */
const map = new Map();
var singleNumber = function (nums, k, m) {
  // 生成32位的数组，保存所有数字对应的进制位的情况
  const arr = new Array(32).fill(0);
  if (map.size() === 0) {
    mapCreater();
  }
  for (let index = 0; index < nums.length; index++) {
    numToBin(nums[index], arr);
  }
  let ans = 0;
  for (let index = 0; index < 32; index++) {
    if (arr[index] % m !== 0) {
      if (arr[index] % m === k) {
        ans |= 1 << i;
      } else {
        return -1;
      }
    }
  }
  if (ans == 0) {
    let count = 0;
    for (let index = 0; index < arr.length; index++) {
      arr[index] && count++;
    }
    if (count !== k) {
      return -1;
    }
  }
  return ans;
};

function compare(nums, k, m) {
  //  先进行词频统计
  const map = new Map();
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    if (map.has(element)) {
      map.set(element, map.get(element) + 1);
    } else {
      map.set(element, 1);
    }
  }
  //   遍历所有keys找到词频为k的数字
  for (const [key, value] of map.entries()) {
    if (value === k) {
      return key;
    }
  }
  return -1;
}
function generateArray(range, numKinds, k = 2, m = 3) {
  // 生成一个长度为 k + (numKinds-1)*m的数组
  const arr = new Array(k + (numKinds - 1) * m);
  //   声明一个hashSet，保存生成过的数，因为后面添加的数，不能是之前已经添加过的
  const numSet = new Set();
  //   先填好出现k次的数字
  const kNumber = generateNums(range);
  let index = 0;
  for (; index < k; index++) {
    arr[index] = kNumber;
  }
  numSet.add(kNumber);
  numKinds--;
  //   开始填出现m次的数字
  while (numKinds !== 0) {
    let mNumber = 0;
    do {
      mNumber = generateNums(range, numSet);
    } while (numSet.has(mNumber));
    numKinds--;
    for (let i = 0; i < m; i++) {
      arr[index++] = mNumber;
    }
  }
  // 都填好之后，进行，打乱顺序
  for (let i = 0; i < arr.length; i++) {
    //   生成一个随机的j位置 0-arr.length-1
    const j = Math.floor(Math.random() * arr.length);
    // 交换位置
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }
  return arr;
}
function generateNums(range) {
  return Math.floor(Math.random() * range + 1 - (Math.random() * range + 1));
}
function isEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  return arr1.every((_, index) => arr1[index] === arr2[index]);
}
function test() {
  // 测试次数
  let testTimes = 10000;
  // 测试数组的数字种类
  let maxNumKinds = 5;
  // 标记是否成功
  let isSuccess = true;
  // 最大的次数
  let max = 9;
  // 最大的数字
  let maxValue = 200;
  console.log("测试开始");
  for (let index = 0; index < testTimes; index++) {
    //   随机生成numKinds 必须大于2
    const numKinds = Math.floor(Math.random() * maxNumKinds) + 2;
    // 随机生成 k ,m
    const a = Math.floor(Math.random() * max + 1);
    const b = Math.floor(Math.random() * max + 1);
    // 我们要保证 k < m
    let k = Math.min(a, b);
    let m = Math.max(a, b);
    if (k === m) {
      m++;
    }
    // 生成一个满足题目的数组
    const arr = generateArray(maxValue, numKinds, k, m);
    const res1 = compare(arr, k, m);
    const res2 = singleNumber(arr, k, m);
    if (!isEqual(res1, res2)) {
      isSuccess = false;
      break;
    }
  }
  console.log(isSuccess ? "good good study" : "fuck");
}
// test();
// 将数字转成二进制数组,并将情况登记在arr
function numToBin(num, arr) {
  while (num !== 0) {
    // 当前最右侧进制位为1
    const rightOne = num & -num;
    // 当前的进制位为1的+1
    arr[map.get(rightOne)]++;
    // 当前数最后一位向左移动到上一次最右侧的1所在进制位
    num ^= rightOne;
  }
}
// 生成 每个位数的值对应的位的hashmap
// 1111
// 8421
// map{ 1=> 0, 2 =>1, 4 =>2, 8 => 3... }
function mapCreater() {
  // const map = new Map();
  let value = 1;
  for (let index = 0; index < 32; index++) {
    map.set(value, index);
    value <<= 1;
  }
  // return map;
}
console.log("二进制", numToBin(10));
