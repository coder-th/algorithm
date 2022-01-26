/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.values = []// A栈负责实现push、pop等操作
    this.minValues = []// B栈负责维护最小值的情况
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.values.push(x)
    if(x <= this.minValues[this.minValues.length-1] || this.minValues.length === 0) {
        // 新加的元素比B栈顶的小或者B栈当前为空
        this.minValues.push(x)

    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    const x = this.values.pop()
    if(x===this.minValues[this.minValues.length-1]) {
        this.minValues.pop()
    }
    return   x
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {

    return  this.values[this.values.length-1]
};

/**
 * @return {number}
 */
MinStack.prototype.min = function() {
    return this.minValues[this.minValues.length-1]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */
