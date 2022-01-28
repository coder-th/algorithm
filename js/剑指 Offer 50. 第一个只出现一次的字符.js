/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function (s) {
  if (s.length === 0) return " ";
  if (s.length === 1) return s;
  const chars = new Array(26).fill(0);
  for (let index = 0; index < s.length; index++) {
    const charIndex = s[index].charCodeAt() - "a".charCodeAt();
    chars[charIndex]++;
  }
  for (let index = 0; index < s.length; index++) {
    const charIndex = s[index].charCodeAt() - "a".charCodeAt();
    if (chars[charIndex] === 1) {
      return s[index];
    }
  }
  return " ";
};
console.log(firstUniqChar("abaccdeff"));
console.log(firstUniqChar("leetcode"));
