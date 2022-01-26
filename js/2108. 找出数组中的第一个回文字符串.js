/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function (words) {
  let ans = "";
  for (let index = 0; index < words.length; index++) {//N
    if (isPalindrome(words[index])) {// 
      ans = words[index];
      break;
    }
  }
  return ans;
};
/**
 * 判断是不是回文字符串
 * @param {*} str
 */
function isPalindrome(str) {
  let isSame = true;
  for (let index = 0; index < str.length >> 1; index++) {
    if (str[index] !== str[str.length - 1 - index]) {
      isSame = false;
      break;
    }
  }
  return isSame;
}
