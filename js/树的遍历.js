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
/***********************递归版************************************ */
/**
 * 前序遍历
 * @param {TreeNode} root
 * @returns
 */
function preOrder(root) {
  let res = [];
  const dfs = (node) => {
    if (node === null) {
      return;
    }
    res.push(node.val);
    dfs(node.left);
    dfs(node.right);
  };
  dfs(root);
  return res;
}
/**
 * 中序遍历
 * @param {TreeNode} root
 * @returns
 */
function inOrder(root) {
  let res = [];
  const dfs = (node) => {
    if (node === null) {
      return;
    }

    dfs(node.left);
    res.push(node.val);
    dfs(node.right);
  };
  dfs(root);
  return res;
}
/**
 * 后序遍历
 * @param {TreeNode} root
 * @returns
 */
function postOrder(root) {
  let res = [];
  const dfs = (node) => {
    if (node === null) {
      return;
    }
    dfs(node.left);
    dfs(node.right);
    res.push(node.val);
  };
  dfs(root);
  return res;
}

/***********************栈版************************************ */
/**
 * 前序遍历
 * @param {TreeNode} root
 */
function preOrderStack(root) {
  const res = [];
  const stack = [];
  while (root || stack.length) {
    while (root) {
      stack.push(root);
      res.push(root.val);
      root = root.left;
    }
    // 弹出元素
    const lastLeftNode = stack.pop();
    root = lastLeftNode.right;
  }
  return res;
}
/**
 * 中序遍历
 * @param {TreeNode} root
 */
function inOrderStack(root) {
  const res = [];
  const stack = [];
  while (root || stack.length) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    // 弹出元素
    const lastLeftNode = stack.pop();
    res.push(lastLeftNode.val);
    root = lastLeftNode.right;
  }
  return res;
}
/**
 * 后序遍历
 * @param {TreeNode} root
 */
function postOrderStack(root) {
  if (!root) return;
  const res = [];
  const stack = [];
  let lastVisitedNode;

  while (root !== null || stack.length) {
    while (root !== null) {
      stack.push(root);
      root = root.left;
    }

    const lastLeftNode = stack[stack.length - 1];
    if (lastLeftNode.right == null || lastLeftNode.right === lastVisitedNode) {
      res.push(lastLeftNode.val);
      lastVisitedNode = lastLeftNode;
      // 弹出元素
      stack.pop();
    } else {
      root = lastLeftNode.right;
    }
  }
  return res;
}

const tree = buildTree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log("前序遍历:递归 => ", preOrder(tree));
console.log("前序遍历:栈 => ", preOrderStack(tree));
console.log("中序遍历:递归 => ", inOrder(tree));
console.log("中序遍历:栈 => ", inOrderStack(tree));
console.log("后序遍历:递归 => ", postOrder(tree));
console.log("后序遍历:栈 => ", postOrderStack(tree));
