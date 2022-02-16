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
  if (root === null || root === p || root === q) {
    //   根节点刚好就是P或者q
    return root;
  }
  //   查找左右子树的公共祖先节点
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);
  if (right === null) {
    //   p,q都在左侧
    return left;
  } else if (left === null) {
    //   p,q都在右侧
    return right;
  } else {
    // 左右子树都有公共祖先，
    return root;
  }
};

console.log(
  lowestCommonAncestor(buildTree([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]), 5, 1)
); //3
console.log(
  lowestCommonAncestor(buildTree([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]), 5, 4)
); //5
