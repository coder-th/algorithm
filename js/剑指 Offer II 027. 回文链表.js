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
 * @param {ListNode} head
 * @return {boolean}
 */
// var isPalindrome = function (head) {
//   // 拿到链表的所有数
//   const array = [];
//   while (head !== null) {
//     array.push(head.val);
//     head = head.next;
//   }
//   let isSame = true;
//   for (let index = 0; index < array.length >> 1; index++) {
//     if (array[index] !== array[array.length - index - 1]) {
//       isSame = false;
//       break;
//     }
//   }
//   return isSame;
// };

function findMidNode(head) {
  if (!head) return null;
  // 定义快慢指针
  let fast = head;
  let slow = head;
  while (fast.next !== null && fast.next.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
}

function reverseList(head) {
  let pre = null;
  while (head !== null) {
    const next = head.next;
    head.next = pre;
    pre = head;
    head = next;
  }
  return pre;
}

function isPalindrome(head) {
  if (!head) return true;
  //  找到中间的节点
  const midNode = findMidNode(head);
  // 翻转后半段的链表
  const otherList = reverseList(midNode.next);
  let L = head;
  let R = otherList;
  let result = true;
  while (R !== null) {
    if (L.val !== R.val) {
      result = false;
      break;
    }
    L = L.next;
    R = R.next;
  }
  midNode.next = reverseList(otherList);
  return result;
}

console.log(isPalindrome(buildList([1, 2, 3, 3, 2, 1])));
console.log(isPalindrome(buildList([1, 2, 0, 1])));
console.log(isPalindrome(buildList([1])));
// console.dir(reverseList(buildList([1, 2, 5, 7, 2, 1])), { depth: null });
