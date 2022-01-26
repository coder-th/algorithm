/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  if (s.length < t.length) {
    //   被包含的子串都比源字符串还要长，不存在满足的
    return "";
  }
  let minLen = Number.MIN_SAFE_INTEGER
  let L = 0,R = 0,// [1,1)表示当前窗口没有字符
  
};

console.log(minWindow("ADOBECODEBANC", "ABC")); // "BANC"
console.log(minWindow("a", "a")); // "a"
console.log(minWindow("a", "aa")); // ""
