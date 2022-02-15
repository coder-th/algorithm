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

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let A = headA;
  let B = headB;
  // 有空链表，那么久不会有相交节点
  if (A === null || B === null) {
    return null;
  }

  while (A !== B) {
    //   A遍历完了，就走B的
    A = A === null ? headB : A.next;
    //   B遍历完了，就走A的
    B = B === null ? headA : B.next;
  }
  return A;
};

console.dir(buildList([4, 1, 8, 4, 5]), { depth: null });
console.log(
  getIntersectionNode(buildList([4, 1, 8, 4, 5]), buildList([5, 0, 1, 8, 4, 5]))
); //8
console.log(
  getIntersectionNode(buildList([0, 9, 1, 2, 4]), buildList([3, 2, 4]))
); //2
