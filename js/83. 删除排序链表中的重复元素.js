/**
 * Definition for singly-linked list.

 */
const head = buildList([1, 1, 2, 3, 3]);
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if (!head) return head;
  let cur = head;
  while (cur.next) {
    if (cur.val === cur.next.val) {
      cur.next = cur.next.next;
    } else {
      cur = cur.next;
    }
  }
  return head;
};

function compare(head) {
  const set = new Set();
  while (head !== null) {
    set.add(head.val);
    head = head.next;
  }
  return buildList([...Array.from(set)]);
}
function test() {
  let testTime = 100000;
  let maxVal = 100;
  let maxLen = 300;
  let isSuccess = true;
  for (let index = 0; index < testTime; index++) {
    //  先构建出来一个数组
    const array = buildArray(maxVal, maxLen);
    // 根据数组生成链表
    const linkList = buildList(array);
    // 传入链表到不同的方法里面
    const listL = deleteDuplicates(linkList);
    const listR = compare(linkList);
    // 对比
    if (!isEqual(listL, listR)) {
      isSuccess = false;
      //  如果有错误的，打印出来
      console.log(array);
      console.dir(listL, { depth: null });
      console.dir(listR, { depth: null });
      break;
    }
  }
  console.log(isSuccess ? "nice" : "fuck");
}
test();
function buildArray(maxVal, maxLen) {
  // 随机生成一个长度
  const len = Math.floor(Math.random() * maxLen) + 1;
  const array = new Array(len);
  //   记录上一次的值
  let preNums = 0;
  for (let index = 0; index < len; index++) {
    //   记录当前生成的数
    let curNums = preNums;
    // 判断当前是否要使用重复的数
    const isNeedSame = Math.random() < 0.5;
    if (!isNeedSame) {
      curNums += Math.floor(Math.random() * 10);
    }
    preNums = curNums;
    array[index] = curNums;
  }
  return array;
}
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
function buildList(array) {
  if (array.length === 0 || array === null) return null;
  const node = new ListNode(array[0]);
  const head = node;
  let curNode = head;
  for (let index = 1; index < array.length; index++) {
    const newNode = new ListNode(array[index]);
    curNode.next = newNode;
    curNode = newNode;
  }
  return head;
}

function isEqual(obj1, obj2) {
  if (obj1 === null && obj2 === null) {
    return true;
  }
  if ((obj1 === null && obj2 !== null) || (obj1 !== null && obj2 === null)) {
    return false;
  }
  let isSame = true;
  // 遍历这两条链表
  while (obj1.next && obj2.next) {
    if (obj1.val !== obj2.val) {
      isSame = false;
      break;
    } else {
      obj1 = obj1.next;
      obj2 = obj2.next;
    }
  }
  if (isSame) {
    isSame = obj1.next === obj2.next;
  }
  return isSame;
}
// console.dir(buildList(buildArray(300, 30)), { depth: null });
// const L = buildList(buildArray(300, 30));
// const R = buildList(buildArray(300, 30));
// console.log("isEqual", isEqual(L, R));
