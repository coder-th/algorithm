/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  // 先对饥饿值和孩子的期望值进行排序
  g = g.sort((a, b) => a - b);
  if (!s.length) return 0;
  s = s.sort((a, b) => a - b);
  // 定义左右指针
  let left = 0;
  let right = 0;
  // 保存满足条件的结果
  let ans = 0;
  while (left <= g.length && right <= s.length) {
    if (g[left] <= s[right]) {
      ans++;
      left++;
    }
    right++;
  }
  return ans;
};
console.log(findContentChildren([1, 2, 3], [1, 1])); //1
console.log(findContentChildren([1, 2], [1, 2, 3])); //2
console.log(findContentChildren([1, 2], [])); //0
console.log(findContentChildren([1, 1, 1], [1, 1, 1, 1])); //3
