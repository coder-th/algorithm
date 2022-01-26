/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  return helper(nums, 0, nums.length - 1);
};
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
function helper(arr, left, right) {
  if (left > right) {
    return null;
  }
  // 取出中间项作为根节点
  const middleIndex = ((right - left) >> 1) + left;
  const root = new TreeNode(arr[middleIndex]);
  root.left = helper(arr, left, middleIndex - 1);
  root.right = helper(arr, middleIndex + 1, right);
  return root;
}
console.dir(sortedArrayToBST([-10, -3, 0, 5, 9]), { depth: null });
