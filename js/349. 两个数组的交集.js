/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  // 先对数组进行排序
  nums1 = nums1.sort((a, b) => a - b);
  nums2 = nums2.sort((a, b) => a - b);
  var left = (right = 0);
  var ans = [];
  while (left < nums1.length && right < nums2.length) {
    if (nums1[left] === nums2[right]) {
      if (ans[ans.length - 1] !== nums1[left]) {
        ans.push(nums1[left]);
      }
      left++;
      right++;
    } else if (nums1[left] < nums2[right]) {
      left++;
    } else {
      right++;
    }
  }
  return ans;
};

// console.log(intersection([1, 2, 2, 1], [2, 2])); //[2]
// console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4])); //[9,4]

/**
 * 生成一个只含字母的随机字符串(长度随机，字符随机)
 * @param {*} maxLen 最大长度
 * @returns
 */
function gernateRandomOnlyStr(maxLen) {
  // 先确定 A - z的charcode
  const range = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  // 在这个范围随机挑出一个字符
  const getRandomChar = () => {
    return range[Math.floor(Math.random() * 51)];
  };
  // 生成一个随机长度
  const getRandomLen = (N) => Math.floor(Math.random() * N);
  // 遍历生成字符串
  let ans = "";
  for (let index = 0; index < getRandomLen(maxLen); index++) {
    ans += getRandomChar();
  }
  return ans;
}
/**
 * 生成一个随机数组(长度随机，值随机)
 * @param {*} maxLen
 * @param {*} maxValue
 * @param {*} isAllPositive
 * @returns
 */
function generateRandomArray(maxLen, maxValue, isAllPositive = false) {
  // 生成一个随机长度
  const getRandomLen = (N) => Math.floor(Math.random() * N);
  // 生成一个随机数
  const getRandomNumber = () => {
    return isAllPositive
      ? Math.floor(Math.random() * maxValue)
      : Math.floor(Math.random() * maxValue) -
          Math.floor(Math.random() * maxValue);
  };
  // 遍历生成数组
  let ans = [];
  for (let index = 0; index < getRandomLen(maxLen); index++) {
    ans.push(getRandomNumber());
  }
  return ans;
}

function runTest() {
  // 测试的次数，
  const testTimes = 100;
  //  数组的最大值和长度
  const maxLen = 100;
  const maxValue = 100;
  // 每一次是否成功
  const isAllSuccess = true;

  
}

console.log(generateRandomArray(100, 65, true));
