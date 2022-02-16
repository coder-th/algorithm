/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  if (!s.length) return "";
  let chars = s.trim().split(" ").filter(Boolean);
  let L = 0;
  let R = chars.length - 1;
  while (L <= R) {
    const temp = chars[L];
    chars[L] = chars[R];
    chars[R] = temp;
    L++;
    R--;
  }
  let ret = "";
  for (let index = 0; index < chars.length; index++) {
    const char = chars[index];
    if (index === 0) {
      ret += char;
    } else {
      ret += " " + char;
    }
  }
  return ret;
};
console.log(reverseWords("the sky is blue"));
console.log(reverseWords("  hello world!  "));
console.log(reverseWords("a good   example"));
