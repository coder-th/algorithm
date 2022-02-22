/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
function buildTree(array) {
  if (!array.length) return null;
  const root = new TreeNode(array[0]);
  let isLeft = true;
  const queue = [root];
  for (let i = 1; i < array.length; i++) {
    const node = new TreeNode(array[i]);
    queue.push(node);
    const firstNode = queue[0];
    if (isLeft) {
      firstNode.left = node;
      isLeft = false;
    } else {
      firstNode.right = node;
      isLeft = true;
      queue.shift();
    }
  }

  return root;
}
console.dir(buildTree([1, 2, 3, 4, null, 5, 6, null, 9]), { depth: null });
/**
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function (root) {
  /**
   *  得到某个节点的盗取情况最大值
   * @param {TreeNode} node
   * @returns [norob,rob] 返回不抢的情况最大值和抢的情况下最大值
   */
  const dp = function (node) {
    // base case
    if (node === null) return [0, 0];
    // 左子树的盗取情况
    const leftRes = dp(node.left);
    // 右子树的盗取情况
    const rightRes = dp(node.right);
    // 抢，就只能抢下下家
    const rob = node.val + leftRes[0] + rightRes[0];
    // 不抢，下家取决于抢或不抢的最大值
    const norob =
      Math.max(leftRes[0], leftRes[1]) + Math.max(rightRes[0], rightRes[1]);

    return [norob, rob];
  };
  //   根节点的盗取情况
  const result = dp(root);
  return Math.max(result[0], result[1]);
};
console.log(rob(buildTree([3, 2, 3, null, 3, null, 1]))); //7
console.log(rob(buildTree([3, 4, 5, 1, 3, null, 1]))); //9
