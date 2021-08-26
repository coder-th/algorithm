/**
 * @description 最长回文字符串
 * 给你一个字符串 s，找到 s 中最长的回文子串
 * @example 'babad', a 就是最长的回文子串
 */

// 题目
let s1 = "babad"

let s2 = "cbbd"

let s3 = "a"

let s4 = "ac"

let longestPalindrome = function(s) {
  // 边界值, 小于2的直接返回本身就是一个回文子串
  if (s.length < 2) {
    return s;
  }
  // 定义结果变量用于存储结果
  let res = "";
  // 遍历字符串
  for (let i = 0; i < s.length; i++) {
    // 回文子串是奇数
    helper(i, i)
    // 回文子串是偶数
    helper(i, i+1)
  }

  function helper(m, n) {
    while(m >= 0 && n < s.length && s[m] == s[n]) {
      m--
      n++
    }
    // z注意此处m,n的值循环完后  是恰好不满足循环条件的时刻
    // 此刻m到n的距离为n-m+1 但是mn两个边界不能取 所以应该取m+1到n-1的区间 长度是n-m-1
    if (n-m-1 > res.length) {
      res = s.slice(m + 1, n)
    }
  }
  return res
};

console.log(longestPalindrome(s2));