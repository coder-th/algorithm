/**
 * Definition for singly-linked list.

 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}
function buildList(array) {
  if (!array.length) return null;
  let head = new ListNode(array[0]);
  let curNode = head;
  for (let index = 1; index < array.length; index++) {
    const node = new ListNode(array[index]);
    curNode.next = node;
    curNode = node;
  }
  return head;
}
console.dir(buildList([1, 23, 3, 5, 6]), { depth: null });
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (head === null) {
    return null;
  }
  let pre = null;
  while (head !== null) {
    const next = head.next;
    head.next = pre;
    pre = head;
    head = next;
  }
  return pre;
};

console.dir(reverseList(buildList([1, 23, 3, 5, 6])), { depth: null });
