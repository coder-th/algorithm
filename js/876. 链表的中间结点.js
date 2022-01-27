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
function buildArray(maxLen, maxVal) {
  const len = Math.floor(Math.random() * maxLen + 1);
  const array = new Array(len);
  for (let index = 0; index < array.length; index++) {
    array[index] = Math.floor(Math.random() * maxVal + 1);
  }
  return array;
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

function compare(head) {
  // 先把所有的节点值保存在数组
  const array = [];
  let curNode = head;
  while (curNode !== null) {
    array.push(curNode.val);
    curNode = curNode.next;
  }
  // 中间节点偏右索引
  const left = 0;
  const right = array.length - 1;
  const midIndex = ((right - left + 1) >> 1) + left;
  let node = head;
  for (let index = 0; index < midIndex; index++) {
    node = node.next;
  }
  return node;
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
  isSame = L === R;

  return isSame;
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  // 快慢指针
  let fast = head;
  let slow = head;
  while (fast !== null) {
    if (fast.next !== null && fast.next.next !== null) {
      fast = fast.next.next;
      slow = slow.next;
    } else if (fast.next === null) {
      return slow;
    } else if (fast.next.next === null) {
      return slow.next;
    }
  }
};

function runTest(params) {
  // 运行测试用例的次数(10万次)
  let testTimes = 100000;
  let isSuccess = true;
  // 数组最大长度
  let maxLen = 10;
  // 数组中最大的值
  let maxVal = 100;
  for (let index = 0; index < testTimes; index++) {
    //   生成随机数组
    const array = buildArray(maxLen, maxVal);
    // 构建链表
    const head = buildList(array);
    // 分别调用得到结果
    const L = middleNode(head);
    const R = compare(head);
    // console.dir(head, { depth: null });
    // console.dir(L, { depth: null });
    // console.dir(R, { depth: null });
    // console.log(L, R);
    // 进行判读是够一样
    if (!isEqual(L, R)) {
      isSuccess = false;
      // 有错了，没必要往下算了
      break;
    }
  }
  console.log(isSuccess ? "nice" : "funck you");
}
runTest();
