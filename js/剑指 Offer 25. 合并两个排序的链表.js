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
    const newNode = new ListNode(array[index]);
    curNode.next = newNode;
    curNode = newNode;
  }
  return head;
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  if (l1 === null && l2 === null) {
    return null;
  }
  const head = new ListNode(-1);
  let curNode = head;
  while (l1 !== null && l2 !== null) {
    if (l1.val <= l2.val) {
      curNode.next = l1;
      l1 = l1.next;
    } else {
      curNode.next = l2;
      l2 = l2.next;
    }
    curNode = curNode.next;
  }
  curNode.next = l1 !== null ? l1 : l2;
  return head.next;
};

function buildArray(maxLen, maxVal) {
  const len = Math.floor(Math.random() * maxLen + 1);
  const array = new Array(len);
  let preNum = -1;
  for (let index = 0; index < array.length; index++) {
    let curNum = -1;
    do {
      curNum = Math.floor(Math.random() * maxVal + 1);
    } while (curNum < preNum);
    array[index] = curNum;
    preNum = curNum;
  }
  return array;
}

function buildList(array) {
  if (array === null || !array.length) {
    return null;
  }
  const head = new ListNode(array[0]);
  let curNode = head;
  for (let index = 1; index < array.length; index++) {
    const node = new ListNode(array[index]);
    curNode.next = node;
    curNode = node;
  }
  return head;
}

function isEqual(L, R) {
  if ((L === null && L !== R) || (L !== null && R == null)) {
    return false;
  }
  let isSame = true;

  while (L !== null && R !== null) {
    if (L.val !== R.val) {
      isSame = false;
      break;
    }
    L = L.next;
    R = R.next;
  }
  isSame = L === R;
  return isSame;
}
function compare(l1, l2) {
  let array = [];
  while (l1 !== null) {
    array.push(l1.val);
    l1 = l1.next;
  }
  while (l2 !== null) {
    array.push(l2.val);
    l2 = l2.next;
  }
  array = array.sort((a, b) => a - b);
  return buildList(array);
}

function runTest() {
  const testTimes = 100000;
  const maxLen = 3;
  const maxVal = 1000;
  let isSuccess = true;
  for (let index = 0; index < testTimes; index++) {
    const array1 = buildArray(maxLen, maxVal);
    const array2 = buildArray(maxLen, maxVal);
    const L = mergeTwoLists(buildList(array1), buildList(array2));
    const R = compare(buildList(array1), buildList(array2));
    if (!isEqual(L, R)) {
      console.log(array1, array2);
      console.dir(L, { depth: null });
      console.dir(R, { depth: null });
      isSuccess = false;
      break;
    }
  }
  console.log(isSuccess ? "nice" : "fuck");
}
runTest();
