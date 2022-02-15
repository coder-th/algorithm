function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function buildTree(array) {
  if (!array.length) return null;
  let root = new TreeNode(array[0]);
  let isLeft = true;
  //   生成一个队列
  const queue = [root];
  for (let index = 1; index < array.length; index++) {
    // 新建节点
    const node = new TreeNode(array[index]);
    // 将当前节点添加到队列中
    queue.push(node);
    //   拿出队列的第一个元素
    const firstNode = queue[0];
    if (isLeft) {
      firstNode.left = node;
      isLeft = false;
    } else {
      firstNode.right = node;
      isLeft = true;
      //   完成一个节点的左右分支填充，
      // 说明该节点已经被添加完成，退出队列
      queue.shift();
    }
  }
  return root;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) return 0;
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};
console.log(maxDepth(buildTree([3, 9, 20, null, null, 15, 7])));
