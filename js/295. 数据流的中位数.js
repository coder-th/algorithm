class Heap {
  /**
   *
   * @param {是否为小根堆} isSmall 是否为小根堆
   */
  constructor(isSmall = true) {
    this.heap = [];
    // 是否为小根堆
    this.isSmall = isSmall;
  }
  getParentIndex(index) {
    return (index - 1) >> 1;
  }
  getLeftIndex(index) {
    return index * 2 + 1;
  }
  getRightIndex(index) {
    return index * 2 + 2;
  }
  swap(i, j) {
    let temp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temp;
  }
  size() {
    return this.heap.length;
  }
  peek(index) {
    return this.heap[index];
  }
  shiftUp(index) {
    if (index === 0) return;
    const parentIndex = this.getParentIndex(index);
    // 小根堆的情况下: 当前节点比父节点还要小，需要往上提
    if (this.isSmall && this.heap[index] < this.heap[parentIndex]) {
      this.swap(parentIndex, index);
      this.shiftUp(parentIndex);
    }
    // 大根堆的情况下: 当前节点比父节点还要大，需要往上提
    if (!this.isSmall && this.heap[index] > this.heap[parentIndex]) {
      this.swap(parentIndex, index);
      this.shiftUp(parentIndex);
    }
  }
  shiftDown(index) {
    const leftIndex = this.getLeftIndex(index);
    const rightIndex = this.getRightIndex(index);
    if (this.isSmall) {
      // 小根堆: 当前节点比左子节点还要大，往下移
      if (this.heap[index] > this.heap[leftIndex]) {
        this.swap(index, leftIndex);
        this.shiftDown(leftIndex);
      }
      // 小根堆: 当前节点比右子节点还要大，往下移
      if (this.heap[index] > this.heap[rightIndex]) {
        this.swap(index, rightIndex);
        this.shiftDown(rightIndex);
      }
    } else {
      // 大根堆
      // 大根堆: 当前节点比左子节点还要小，往下移
      if (this.heap[index] < this.heap[leftIndex]) {
        this.swap(index, leftIndex);
        this.shiftDown(leftIndex);
      }
      // 大根堆: 当前节点比右子节点还要小，往下移
      if (this.heap[index] < this.heap[rightIndex]) {
        this.swap(index, rightIndex);
        this.shiftDown(rightIndex);
      }
    }
  }
  insert(value) {
    this.heap.push(value);
    this.shiftUp(this.heap.length - 1);
  }
  pop() {
    if (this.heap.length === 0) {
      throw new Error("没有数据了");
    }
    if (this.heap.length === 1) {
      return this.heap.pop();
    }
    const ele = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.shiftDown(0);
    return ele;
  }
  peek(index) {
    console.log("peek", this.heap);
    return this.heap[index];
  }
}

var MedianFinder = function () {
  this.minHeap = new Heap(true);
  this.maxHeap = new Heap(false);
};

/**
 * 大根堆负责存较小的数，小根堆负责存较大的数
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  if (!this.maxHeap.size()) {
    // 当前大根堆都没有数据，直接加进大根堆
    this.maxHeap.insert(num);
    return;
  }
  // 如果当前的数，比大根堆的堆顶还要大，加入小根堆
  if (this.maxHeap.peek(0) <= num) {
    this.minHeap.insert(num);
  } else {
    this.maxHeap.insert(num);
  }
  // 加完之后，进行均分测量，如果哪个堆比另一个堆的长度还要大于等于2以上，弹出较大的那个，加到较小的那个
  while (Math.abs(this.minHeap.size() - this.maxHeap.size()) >= 2) {
    if (this.minHeap.size() > this.maxHeap.size()) {
      this.maxHeap.insert(this.minHeap.pop());
    } else {
      this.minHeap.insert(this.maxHeap.pop());
    }
  }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  const minSize = this.minHeap.size();
  const maxSize = this.maxHeap.size();
  const min = this.minHeap.peek(0);
  const max = this.maxHeap.peek(0);
  if ((minSize + maxSize) % 2 === 0) {
    // 当前列表长度为偶数
    return (min + max) / 2;
  } else {
    // 奇数，看谁的长度比较长
    return minSize > maxSize ? min : max;
  }
};

//  * Your MedianFinder object will be instantiated and called as such:
var obj = new MedianFinder();
obj.addNum(1);
obj.addNum(2);
obj.addNum(3);
obj.addNum(4);
obj.addNum(5);
obj.addNum(6);
var param_2 = obj.findMedian();
console.log(param_2);
