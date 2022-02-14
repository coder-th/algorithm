function permute(array) {
  if (!array || array.length === 0) return [];
  let ans = [];
  /**
   *
   * @param {string} str 源字符串
   * @param {number} position 当前遍历到的位置
   * @param {string[]} ans 保存position后所有的答案
   */
  const process = function (str, position, ans) {
    if (position === str.length) {
      ans.push([...str]);
      return;
    }
    for (let index = position; index < str.length; index++) {
      swap(str, position, index);
      process(str, position + 1, ans);
      swap(str, position, index);
    }
  };
  function swap(str, i, j) {
    if (!str) return str;
    if (i >= str.length || j >= str.length) return str;
    const temp = str[i];
    str[i] = str[j];
    str[j] = temp;
  }

  process(array, 0, ans);

  return ans;
}

console.log(permute([1, 2, 3]));
