/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function (s, n) {
  // base case
  if (n > s.length) {
    throw new Error("cannot reverse");
  }
  const chars = s.split("");
  const len = chars.length;
  const ret = new Array(len);
  for (let index = 0; index < len; index++) {
    const final = (n + index) % len;
    ret[index] = chars[final];
  }
  return ret.join("");
};
console.log(reverseLeftWords("abcdefg", 2)); //cdefgab
console.log(reverseLeftWords("lrloseumgh", 6)); //umghlrlose
