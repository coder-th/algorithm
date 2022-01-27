/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function (head, k) {
  let fast = head;
  let slow = head;
  //   先走k步
  while (fast !== null && k > 0) {
    fast = fast.next;
    k--;
  }
  //   两个指针同步向后走，当第一个指针 \textit{fast}fast 走到链表的尾部空节点时，则此时 \textit{slow}slow 指针刚好指向链表的倒数第kk个节点。
  while (fast !== null && slow !== null) {
    fast = fast.next;
    slow = slow.next;
  }
  return slow;
};
