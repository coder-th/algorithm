/**
 *https://leetcode-cn.com/problems/merge-two-sorted-lists/
 * 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
function createList(arr) {
  if (!arr.length) return null;
  //  生成根节点
  const root = new ListNode(arr[0]);
  // 声明一个临时节点，始终指向最后一个节点
  let final = root;
  if (arr.length > 1) {
    for (let i = 1; i < arr.length; i++) {
      // 生成新的节点
      const node = new ListNode(arr[i]);
      // 最后一个节点指向新节点
      final.next = node;
      final = node;
    }
  }

  return root;
}
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  if (list1 === null) {
    return list2;
  } else if (list2 === null) {
    return list1;
  } else if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list2.next, list1);
    return list2;
  }
};
function run() {
  debugger;
  const res = mergeTwoLists(
    createList([1, 2, 3, 4, 5, 6]),
    createList(1, 5, 6)
  );
  console.log(res);
}
run();
