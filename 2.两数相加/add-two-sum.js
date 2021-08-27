function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let carry = 0;
  // 计算结果的链表
  let sum = new ListNode("0");
  // 保存计算结果的头指针
  let head = sum;
  while (carry || l1 || l2) {
    // 保证可以长度相等的相加(数组不齐用0补齐)
    let value1 = l1 ? l1.val : 0;
    let value2 = l2 ? l2.val : 0;
    // 先计算之前每次累计的总和
    let sumValue = value1 + value2 + carry;
    carry = sumValue >= 10 ? 1 : 0;
    // 当前计算结果保存到链表中
    sum = sum.next = new ListNode(sumValue % 10);
    // 计算因子链表向后移动一位
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }
  if (carry) {
    // 最后一位计算完后，如果当前的carry记录值大于0，需要添加到结果链表中
    sum = sum.next = new ListNode(1);
  }
  return head.next;
};
