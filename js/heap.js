class Heap {
  constructor(compare) {
    this.heap = [];
    this.compare = compare;
  }
  push(node) {
    // 添加到最后的节点
    this.heap.push(node);
    // 开始向上调整
    this.shiftUp(this.heap.length - 1);
  }
  pop() {
    const node = this.heap[0];
    if (node) {
      // 删除最后一个节点，放置到头结点
      this.heap[0] = this.heap.pop();
      // 开始向下调整
      this.shiftDown(0);
      return node;
    } else {
      return null;
    }
  }
  peek() {
    return this.heap[0];
  }
  size() {
    return this.heap.length;
  }
  swap(i, j) {
    let tmp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = tmp;
  }
  shiftUp(index) {
    if (index === 0) return;
    const parentIndex = (index - 1) >>> 1;
    if (
      this.heap[parentIndex] &&
      this.compare(this.heap[parentIndex], this.heap[index]) > 0
    ) {
      this.swap(parentIndex, index);
      this.shiftUp(parentIndex);
    } else {
      return;
    }
  }
  shiftDown(index) {
    const leftIndex = index * 2 + 1;
    const rightIndex = index * 2 + 2;
    if (leftIndex < this.heap.length) {
      const leftNode = this.heap[leftIndex];
      const rightNode = this.heap[rightIndex];
      if (leftNode && this.compare(leftNode, this.heap[index]) < 0) {
        if (rightNode && this.compare(rightNode, leftNode) < 0) {
          // 右节点比左节点还小，那么先处理右节点的
          this.swap(rightIndex, index);
          this.shiftDown(rightIndex);
        } else {
          // 处理左节点
          this.swap(leftIndex, index);
          this.shiftDown(leftIndex);
        }
      } else if (rightNode && this.compare(rightNode, this.heap[index]) < 0) {
        this.swap(rightIndex, index);
        this.shiftDown(index);
      }
    }
  }
}
const minHeap = new Heap((left, right) => {
  return left - right;
});
const maxHeap = new Heap((left, right) => {
  return right - left;
});
// minHeap.push(5);
// minHeap.push(2);
// minHeap.push(4);
// minHeap.push(1);
// console.log(minHeap);
// console.log(minHeap.peek());
// console.log(minHeap.pop());
// console.log(minHeap.pop());
// console.log(minHeap.pop());
// console.log(minHeap.pop());
maxHeap.push(5);
maxHeap.push(10);
maxHeap.push(2);
maxHeap.push(7);
maxHeap.push(6);
console.log(maxHeap);
console.log(maxHeap.pop());
console.log(maxHeap.pop());
console.log(maxHeap.pop());
console.log(maxHeap.pop());
console.log(maxHeap.pop());
