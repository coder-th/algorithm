var MinStack = function () {
  this.stack = [];
  this.min = []; // 一直维护着最小的值
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.stack.push(val);
  let min = val;
  if (this.min.length !== 0) {
    // 比较最小值
    min = Math.min(this.min[this.min.length - 1], val);
  }
  this.min.push(min);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  if (this.stack.length === 0) {
    throw new Error("没有元素了，弹出失败");
  }
  this.stack.pop();
  this.min.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.min[this.min.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
var stack = new MinStack();
stack.push(2);
stack.push(5);
stack.push(1);
stack.push(6);

console.log(stack.getMin());
