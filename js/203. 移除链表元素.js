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
    curNode = curNode.next;
  }
  return head;
}

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  let newHead = new ListNode(0);
  newHead.next = head;
  let curNode = newHead;
  while (curNode.next !== null) {
    //   下一个元素
    const next = curNode.next;
    if (next.val === val) {
      //相同
      curNode.next = next.next;
    } else {
      // 不同
      curNode = next;
    }
  }
  return newHead.next;
};

function compare(head, val) {
  if (!head) return null;
  let array = [];
  // 先把所有的数添加到数组保存
  while (head !== null) {
    array.push(head.val);
    head = head.next;
  }
  //   删掉
  array = array.filter((item) => item !== val);
  //  重新构建
  return buildList(array);
}

function isEqualList(L, R) {
  if ((L === null && R !== null) || (L !== null && R === null)) {
    return false;
  }
  let isSame = true;
  while (L && R) {
    if (L.val !== R.val) {
      isSame = false;
      break;
    } else {
      L = L.next;
      R = R.next;
    }
  }
  // 有可能两个其中一个null
  isSame = L === R;
  return isSame;
}
function buildArray(maxLen, maxVal) {
  const len = Math.floor(Math.random() * maxLen + 1);
  const array = new Array(len);
  for (let index = 0; index < array.length; index++) {
    const num = Math.floor(Math.random() * maxVal + 1);
    array[index] = num;
  }
  const index = Math.floor(Math.random() * len);
  return [array, array[index]];
}

function runTest() {
  const testTime = 10000;
  const maxLen = 5;
  const maxVal = 50;
  let isSuccess = true;
  for (let index = 0; index < testTime; index++) {
    // 随机生成一个数组,并且其中的一个数
    const [array, value] = buildArray(maxLen, maxVal);
    // 生成链表
    const list = buildList(array);
    // 分别调用
    const L = removeElements(list, value);
    const R = compare(list, value);
    if (!isEqualList(L, R)) {
      console.dir(list, { depth: null });
      console.log(value);
      console.dir(L, { depth: null });
      console.dir(R, { depth: null });
      isSuccess = false;
      break;
    }
  }
  console.log(isSuccess ? "nice" : "fuck");
}
runTest();

// console.dir(removeElements(buildList([1, 2, 3, 3, 4, 5]), 3), { depth: null });
// console.dir(compare(buildList([1, 2, 3, 3, 4, 5]), 3), { depth: null });
// console.log(
//   isEqualList(buildList([1, 2, 3, 3, 4, 5]), buildList([1, 2, 3, 3, 4, 5]))
// );
