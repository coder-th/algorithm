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
 * 二叉搜索树的中序遍历是递增，
 * 倒序是递减的
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function (root, k) {
  let res;
  const dfs = function (node) {
    if (node === null) {
      return;
    }
    dfs(node.right);
    if (node.val !== null && --k === 0) {
      res = node.val;
    }
    dfs(node.left);
  };
  dfs(root);
  return res;
};

console.log(kthLargest(buildTree([3, 1, 4, null, 2]), 2)); //4
console.log(kthLargest(buildTree([5, 3, 6, 2, 4, null, null, 1]), 3)); //4
