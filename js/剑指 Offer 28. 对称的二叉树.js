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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (!root) return true;
  //   每一对左右节点的比对结果
  const process = (L, R) => {
    //   两个都为null
    if (L === null && R === null) {
      return true;
    }
    // 两个有一个为null
    if (L === null || R == null) {
      return false;
    }
    // 两个都不为Null
    if (L.val !== R.val) {
      return false;
    }
    return process(L.left, R.right) && process(L.right, R.left);
  };
  return process(root.left, root.right);
};

console.dir(isSymmetric(buildTree([1, 2, 2, 3, 4, 4, 3]))); //true
console.dir(isSymmetric(buildTree([1, 2, 2, null, 3, null, 3]))); //false
