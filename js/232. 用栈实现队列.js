/**
 * 两个原则
 *  一个栈往另一个栈导数据的时候，要遵循两个原则
 *      1. 导数据要全部倒完
 *      2. 导数据前，装数据的那个必须为空
 */

class Stack {
  constructor() {
    this.stack = [];
  }

  push(val) {
    this.stack.push(val);
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }
  pop() {
    if (this.stack.length === 0) {
      throw new Error("stack is empty");
    }
    return this.stack.pop();
  }

  size() {
    return this.stack.length;
  }
}

var MyQueue = function () {
  this.pushStack = new Stack();
  this.popStack = new Stack();
};
/**
 * 两个原则
 *  一个栈往另一个栈导数据的时候，要遵循两个原则
 *      1. 导数据要全部倒完
 *      2. 导数据前，装数据的那个必须为空
 */

MyQueue.prototype.pushToPop = function () {
  if (this.popStack.size() === 0) {
    let len = this.pushStack.size();
    while (len) {
      const element = this.pushStack.pop();
      this.popStack.push(element);
      len--;
    }
  }
};
/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.pushStack.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  // 先检查两个是不是都为空
  if (this.pushStack.size() === 0 && this.popStack.size() === 0) {
    throw new Error("queue is empty");
  }
  // 导数据
  this.pushToPop();
  return this.popStack.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  // 先检查两个是不是都为空
  if (this.pushStack.size() === 0 && this.popStack.size() === 0) {
    throw new Error("queue is empty");
  }
  // 导数据
  this.pushToPop();
  return this.popStack.peek();
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.pushStack.size() === 0 && this.popStack.size() === 0;
};

var myQueue = new MyQueue();
myQueue.push(1); // queue is: [1]
console.log(myQueue);
myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
console.log(myQueue);
let ele = myQueue.peek(); // return 1
console.log(ele);
ele = myQueue.pop(); // return 1, queue is [2]
console.log(ele, myQueue);
myQueue.empty(); // return false
