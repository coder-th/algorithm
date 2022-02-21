/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function (s) {
  // base case
  if (s.length <= 2) return 0;
  let count = 0;
  let number = [];
  for (let index = 0; index < s.length; index++) {
    const char = s[index];
    if (index > 2) {
      number.shift();
    }
    number.push(char);
    if (isValid(number)) count++;
  }
  return count;
};
function isValid(arr) {
  if (arr.length !== 3) return false;
  return arr[0] !== arr[1] && arr[1] !== arr[2] && arr[0] !== arr[2];
}
console.log(countGoodSubstrings("xyzzaz")); //1
console.log(countGoodSubstrings("aababcabc")); //4
console.log(isValid([1, 2, 3]));
