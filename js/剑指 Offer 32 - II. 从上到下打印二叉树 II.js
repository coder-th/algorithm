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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];
  const ans = [];
  const queue = [root];
  while (queue.length) {
    const temp = [];
    // 执行一遍当前长度的数目
    for (let index = queue.length; index > 0; index--) {
      // 弹出当前队头元素
      const node = queue.shift();
      node.val !== null && temp.push(node.val);
      // 将左节点和右节点分别入队
      node.left !== null && queue.push(node.left);
      node.right !== null && queue.push(node.right);
    }
    // 执行完当前层次
    ans.push(temp);
  }
  return ans;
};
// console.dir(buildTree([3, 9, 20, null, null, 15, 7]), { depth: null });
console.log(levelOrder(buildTree([3, 9, 20, null, null, 15, 7])));
