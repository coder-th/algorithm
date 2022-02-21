/**
 * @param {string} s
 * @return {string}
 */
var longestNiceSubstring = function (s) {
  if (s.length <= 1) return "";
  let result = "";

  for (let index = 0; index < s.length; index++) {
    let end = index;
    let curStr = s[index];
    while (end + 1 <= s.length && !isNiceString(s.substring(index, end + 1))) {
      if (s[end + 1]) curStr = curStr + s[end + 1];
      end++;
    }
    // 过滤掉到最后还不是美好字符串的
    if (end < s.length) {
      console.log("得到当前字符串", s, index, end, curStr);
      result = getMaxStr(result, curStr);
    }
  }
  return result;
};
/**
 * 判断当前字符串是不是美好字符串
 * @param {string} curStr
 */
function isNiceString(curStr) {
  let chars = new Array(26).fill(0);
  for (let index = 0; index < curStr.length; index++) {
    const curIndex = (curStr[index].charCodeAt() - "A".charCodeAt()) % 32;
    chars[curIndex]++;
  }
  return chars.filter((item) => item === 1).length === 0;
}
/**
 * 获取长度较大的那个字符串
 * @param {*} str1
 * @param {*} str2
 * @returns
 */
function getMaxStr(str1, str2) {
  const len1 = str1.length;
  const len2 = str2.length;
  return len1 >= len2 ? str1 : str2;
}
console.log(longestNiceSubstring("YazaAay")); //"aAa"
console.log(longestNiceSubstring("Bb")); //"Bb"
console.log(longestNiceSubstring("c")); //""
console.log(longestNiceSubstring("dDzeE")); //"dD"
