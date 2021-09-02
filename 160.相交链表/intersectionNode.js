function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  if (headA === null || headB === null) return null;
  var n = 0;
  var cur1 = headA;
  var cur2 = headB;
  while (cur1.next !== null) {
    // 用来统计当前链表的长度
    n++;
    // 不断往下，直到得到最后一个节点
    cur1 = cur1.next;
  }
  while (cur2.next !== null) {
    n--;
    cur2 = cur2.next;
  }
  if (cur1 !== cur2) {
    // 尾结点不同，说明不可能相交
    return null;
  }
  // n > 0说明headA比headB的链表长度长,目的是为了得到cur1指向长的链表，cur2代表短链表
  cur1 = n > 0 ? headA : headB;
  cur2 = cur1 === headA ? headA : headB;
  n = Math.abs(n);
  if (n !== 0) {
    // 先让长的链表走他们的插值的步长
    cur1 = cur1.next;
  }
  while (cur1 !== cur2) {
    // 两个链表一起走，直到相遇
    cur1 = cur1.next;
    cur2 = cur2.next;
  }
  console.log(`Intersected at ${cur1}`);
  return cur1;
};

/**
 *  时间复杂度O(m+n)空间复杂度O(1)
 * @param {ListNode} headA
 * @param {ListNode} headB
 */
function getIntersectionNode(headA, headB) {
  if (headA === null || headB === null) return null;
  let pA = headA,
    pB = headB;
  while (pA !== pB) {
    // pA走完了链表去走另一条链表。两者到时总会相遇
    pA = pA === null ? pB : pA.next;
    pB = pB === null ? pA : pB.next;
  }
  return pA;
}
