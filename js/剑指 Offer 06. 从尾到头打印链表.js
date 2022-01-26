/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * 数组生成链表
 * @param arr
 */
function generateList(arr) {
  if (!arr.length) return null;
  const root = new ListNode(arr[0]);
  let node = root;
  for (let i = 1; i < arr.length; i++) {
    node.next = new ListNode(arr[i]);
    node = node.next;
  }
  return root;
}
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function (head) {
  const stack = [];
  // 遍历链表，将节点存入栈中
  let node = head
  while (node) {
    if (node.val !== null) {
      stack.unshift(node.val);
    }
    node = node.next;
  }
  return stack;
};
console.log(reversePrint(generateList([1, 3, 2]))); //[2,3,1]
