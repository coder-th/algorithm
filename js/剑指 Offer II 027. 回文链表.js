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
var isPalindrome = function (head) {
  // 拿到链表的所有数
  const array = [];
  while (head !== null) {
    array.push(head.val);
    head = head.next;
  }
  let isSame = true;
  for (let index = 0; index < array.length >> 1; index++) {
    if (array[index] !== array[array.length - index - 1]) {
      isSame = false;
      break;
    }
  }
  return isSame;
};
console.log(isPalindrome(buildList([1, 2, 3, 3, 2, 1])));
console.log(isPalindrome(buildList([1, 2, 0, 1])));
