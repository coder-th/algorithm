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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  if (p.val > q.val) {
    const temp = p;
    p = q;
    q = temp;
  }
  while (root !== null) {
    if (root.val < p.val)
      // p,q 都在 root 的右子树中
      root = root.right;
    // 遍历至右子节点
    else if (root.val > q.val)
      // p,q 都在 root 的左子树中
      root = root.left;
    // 遍历至左子节点
    else break;
  }

  return root;
};

console.log(
  lowestCommonAncestor(buildTree([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]), 2, 8)
); //6
console.log(
  lowestCommonAncestor(buildTree([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]), 2, 4)
); //2
