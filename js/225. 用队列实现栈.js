class Queue {
  constructor() {
    this.queue = [];
  }

  push(val) {
    this.queue.push(val);
  }
  size() {
    return this.queue[this.queue.length - 1];
  }
  peek() {
    if (this.queue.length === 0) {
      throw new Error("queue is empty");
    }
    return this.queue[this.queue.length - 1];
  }
  pop() {
    if (this.queue.length === 0) {
      throw new Error("queue is empty");
    }
    return this.queue.shift();
  }
}

var MyStack = function () {
  this.pushQueue = [];
  this.popQueue = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.pushQueue.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  if (this.empty()) {
    throw new Error("queue is empty");
  }
  if (this.popQueue.length === 0) {
    while (this.pushQueue.length > 1) {
      this.popQueue.push(this.pushQueue.shift());
    }
    const result = this.pushQueue.shift();
    while (this.popQueue.length) {
      this.pushQueue.push(this.popQueue.shift());
    }
    return result;
  }
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  return this.pushQueue[this.pushQueue.length - 1];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.popQueue.length === 0 && this.pushQueue.length === 0;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
var obj = new MyStack();
obj.push(1);
obj.push(2);
obj.push(3);
obj.push(4);
obj.push(5);
var param_2 = obj.pop();
console.log(param_2);
var param_3 = obj.top();
console.log(param_3);
var param_4 = obj.empty();
console.log(param_4);
