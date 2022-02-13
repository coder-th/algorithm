/**
 * Initialize your data structure here.
 * @param {number} size
 */
var MovingAverage = function (size) {
  this.moving = new Array(size);
  this.curIndex = -1;
  this.size = size;
  this.total = 0;
};

/**
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function (val) {
  this.curIndex = this.curIndex + 1 < this.size ? this.curIndex + 1 : 0;
  this.moving[this.curIndex] = val;
  this.total += 1;
  let count = Math.min(this.total, this.size);
  let sum = 0;
  for (let index = 0; index < count; index++) {
    sum += this.moving[index];
  }
  return sum / count;
};




let movingAverage = new MovingAverage(3);
console.log(movingAverage.next(1)); // 返回 1.0 = 1 / 1
console.log(movingAverage.next(10)); // 返回 5.5 = (1 + 10) / 2
console.log(movingAverage.next(3)); // 返回 4.66667 = (1 + 10 + 3) / 3
console.log(movingAverage.next(5)); // 返回 6.0 = (10 + 3 + 5) / 3
