/**
 * @description 无重复字符的最长子串
 * 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
 */

// 题目
let s1 = "abcabcbb";
let s2 = "bbbbb";
let s3 = "pwwkew";
let s4 = "";

// 解法： 滑动窗口
let lengthOfLongestSubstring = (s) => {
  const set = new Set(); // 
  let i = 0, j = 0, maxLength = 0;
  if (s.length === 0) {
    return 0;
  }

  for (i; i < s.length; i++) {
    if (!set.has(s[i])) {
      set.add(s[i])
      maxLength = Math.max(maxLength, set.size);
    } else {
      while(set.has(s[i])) {
        set.delete(s[j])
        j++;
      }
      set.add(s[i]);
    }
  }
  return maxLength;
};

console.log(lengthOfLongestSubstring(s4));