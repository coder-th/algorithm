/**
 * https://leetcode-cn.com/problems/length-of-last-word/
 */
/** 查找最后一个单词的长度(错误)
 *  倒序查找
 * @param {string} s
 * @return {number}
 */
/*var lengthOfLastWord = function (s) {
  var lastIndex = s.length - 1;
  var wordLen = 0;
  // 只有一个字符，
  if (lastIndex === 0) {
    return s[lastIndex] === " " ? 0 : 1;
  }
  while (lastIndex) {
    if (s[lastIndex] !== " ") {
      // 遇到不是空格的,开始统计
      wordLen++;
    } else if (wordLen !== 0) {
      //    遇到空格，并且这时候长度不为0，说明上一个不是空格
      return wordLen;
    }
    // 负责查找字符的指针不断向左移动
    lastIndex--;
  }
};*/

var lengthOfLastWord = function (s) {
  // 标识当前查找的字符的索引
  var lastIndex = s.length - 1;
  // 不断查找，直到遇到不是空格的
  while (s[lastIndex] === " ") {
    lastIndex--; // 不断向左移动
  }
  // 找到不是空格的字符，开始统计
  var wordLen = 0;
  while (lastIndex >= 0 && s[lastIndex] !== " ") {
    wordLen++;
    lastIndex--;
  }
  return wordLen;
};

console.log(lengthOfLastWord("Hello World")); //5
console.log(lengthOfLastWord("   fly me   to   the moon  ")); //4
console.log(lengthOfLastWord("luffy is still joyboy")); //6
console.log(lengthOfLastWord("a")); //1
console.log(lengthOfLastWord(" ")); //0
