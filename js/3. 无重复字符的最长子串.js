/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let ans = 0;
  if (s.length === 0) return ans;
  let set = new Set();
  let end = -1;
  for (let index = 0; index < s.length; index++) {
    //    当前字符下，能够找到的最长不重复字符串的长度
    // 每次开始的时候，要先从缓存中去掉前一个已经计算过的字符
    if (index !== 0) {
      set.delete(s[index - 1]);
    }
    while (end + 1 < s.length && !set.has(s[end + 1])) {
      // 没有溢出，并且，该字符串没有重复出现过
      //   右指针不断往右，并且添加到缓存
      set.add(s[++end]);
    }
    ans = Math.max(ans, end - index + 1);
  }
  return ans;
};

function lengthOfLongestSubstringMap(s) {
  let ans = 0;
  if (s.length === 0) return ans;
  let map = new Map();
  let start = 0;

  for (let index = 0; index < s.length; index++) {
    // 如果之前已经在map上存在过了
    if (map.has(s[index])) {
      // 更新start，找到上一次重复字符串的位置
      start = Math.max(start, map.get(s[index]) + 1);
    }
    map.set(s[index], index);

    ans = Math.max(ans, index - start + 1);
  }
  return ans;
}
/* console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb")); */
console.log(lengthOfLongestSubstring("wpwpkew"));
console.log(lengthOfLongestSubstringMap("wpwpkew"));
/**
 * pwwpkew
 * p => 0
 * w => 1
 * w重复, w => 2
 */
