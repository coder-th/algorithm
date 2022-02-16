/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function buildTree(array) {
  if (!array.length) return null;
  // 采用队列生成树
  const root = new TreeNode(array[0]);
  let isLeft = true;
  const queue = [root];
  for (let index = 1; index < array.length; index++) {
    const node = new TreeNode(array[index]);
    // 拿到队列的第一个节点
    const firstNode = queue[0];
    // 判断放在左节点还是右节点,然后放入队列中，等待处理
    if (isLeft) {
      firstNode.left = node;
      queue.push(node);
      isLeft = false;
    } else {
      firstNode.right = node;
      queue.push(node);
      isLeft = true;
      // 完成该节点的设置，弹出
      queue.shift();
    }
  }
  return root;
}
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  const getHeight = (node) => {
    if (node === null) return 0;
    // 计算出左,右子树的高度
    const leftHeight = getHeight(node.left);
    const rightHeight = getHeight(node.right);
    if (
      leftHeight === -1 ||
      rightHeight === -1 ||
      Math.abs(leftHeight - rightHeight) > 1 // 左子树的高度和右子树的高度差绝对值 <= 1 就是平衡的，否则不平衡
    ) {
      return -1;
    } else {
      // 如果是平衡的，那么，当前该子树的高度为高度的高度的最大值+1(根节点)
      return Math.max(leftHeight, rightHeight) + 1;
    }
  };
  return getHeight(root) !== -1;
};

console.log(isBalanced(buildTree([3, 9, 20, null, null, 15, 7]))); // true
console.log(isBalanced(buildTree([1, 2, 2, 3, 3, null, null, 4, 4]))); // false
