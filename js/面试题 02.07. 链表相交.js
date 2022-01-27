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
function buildList(array) {
  if (!array.length) return null;
  const head = new ListNode(array[0]);
  let curNode = head;
  for (let index = 1; index < array.length; index++) {
    const node = new ListNode(array[index]);
    curNode.next = node;
    curNode = node;
  }
  return head;
}
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let A = headA;
  let B = headB;
  while (A !== B) {
    // 走过你走的路
    A = A === null ? headB : A.next;
    B = B === null ? headA : B.next;
  }
  return A;
};

console.dir(
  getIntersectionNode(
    buildList([4, 1, 8, 4, 5]),
    buildList([5, 0, 1, 8, 4, 5])
  ),
  { depth: null }
);
console.log(
  getIntersectionNode(buildList([0, 9, 1, 2, 4]), buildList([3, 2, 4]))
);
console.log(getIntersectionNode(buildList([2, 6, 4]), buildList([1, 5])));
