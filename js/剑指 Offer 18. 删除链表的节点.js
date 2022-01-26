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
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function (head, val) {
  // 首节点就是要删除的节点
  if (head.val === val) return head.next;
  let pre = head;
  let cur = head.next;
  while (cur.val !== val && cur !== null) {
    pre = cur;
    cur = cur.next;
  }
  if (cur !== null) {
    //   当前的节点值刚好等于要删除的节点的值
    // 上一个节点的next指向当前节点的下个节点，这样就可以跳过当前节点，实现删除
    pre.next = cur.next;
  }
  return head;
};

function buildArray(maxLen, maxVal) {
  const len = Math.floor(Math.random() * maxLen + 1);
  const array = new Array(len);
  const set = new Set();
  for (let index = 0; index < array.length; index++) {
    let nums = 0;
    do {
      nums = Math.floor(Math.random() * maxVal + 1);
    } while (set.has(nums));
    set.add(nums);
    array[index] = nums;
  }
  const index = Math.floor(Math.random() * len);
  return [array, array[index]];
}
function isEqual(L, R) {
  if ((L === null && R !== null) || (L !== null && R === null)) {
    return false;
  }
  let isSame = true;
  while (L && R) {
    if (L.val !== R.val) {
      isSame = false;
      break;
    }
    L = L.next;
    R = R.next;
  }
  isSame = L.next === R.next;
  return isSame;
}
function compare(head, value) {
  // 保存在数组中
  let array = [];
  while (head !== null) {
    array.push(head.val);
    head = head.next;
  }
  array = array.filter((item) => item !== value);
  return buildList(array);
}
/**
 * 测试用例
 * @param {*} params
 */
function runTest(params) {
  // 跑10万次测试用例
  const testTime = 100000;
  let isSuccess = true;
  let maxLen = 30;
  let maxValue = 100;
  for (let index = 0; index < testTime.length; index++) {
    const [array, value] = buildArray(maxLen, maxValue);
    const head = buildList(array);
    const L = deleteNode(head, value);
    const R = compare(head, value);
    if (!isEqual(L, R)) {
      isSuccess = false;
      break;
    }
  }
  console.log(isSuccess ? "nice" : "fuck every day");
}
runTest();
