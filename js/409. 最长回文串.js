/**
 * https://leetcode-cn.com/problems/longest-palindrome/
 */
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  if (s.length <= 1) return s.length;
  //1. 声明一个hashMap
  const map = new Map();
  //2. 统计每个字符出现的个数
  for (let index = 0; index < s.length; index++) {
    const char = s[index];
    const key = char.charCodeAt() - "a".charCodeAt();
    if (map.get(key)) {
      // 如果之前已经存过
      map.set(key, map.get(key) + 1);
    } else {
      map.set(key, 1);
    }
  }
  console.log(map);
  //3. 记录出现奇数个和偶数个的数目
  let odd = 0,
    even = 0;
  for (const [_, value] of map) {
    if (value % 2 === 0) {
      even += value;
    } else {
      even += value - 1; //"ccc"这种情况
      odd += 1;
    }
  }
  return odd ? even + 1 : even;
};

console.log(longestPalindrome("abccccdd")); //7
console.log(longestPalindrome("ccc")); //3
