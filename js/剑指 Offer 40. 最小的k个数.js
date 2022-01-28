class Heap {
  constructor(compare) {
    this.heap = [];
    this.compare = compare;
  }
  swap(i, j) {
    const temp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temp;
  }
  size() {
    return this.heap.length;
  }
  shiftUp(index) {
    if (index === 0) {
      return;
    }
    const parentIndex = (index - 1) >> 1;
    if (
      this.heap[parentIndex] !== undefined &&
      this.compare(this.heap[parentIndex], this.heap[index]) > 0
    ) {
      this.swap(parentIndex, index);
      this.shiftUp(parentIndex);
    }
  }
  shiftDown(index) {
    const leftIndex = index * 2 + 1;
    const rightIndex = index * 2 + 2;
    if (leftIndex < this.heap.length) {
      const leftNode = this.heap[leftIndex];
      const rightNode = this.heap[rightIndex];
      const curNode = this.heap[index];
      if (leftNode !== undefined && this.compare(leftNode, curNode) < 0) {
        if (rightNode !== undefined && this.compare(rightNode, leftNode) < 0) {
          this.swap(rightIndex, index);
          this.shiftDown(rightIndex);
        } else {
          this.swap(leftIndex, index);
          this.shiftDown(leftIndex);
        }
      } else if (
        rightNode !== undefined &&
        this.compare(rightNode, curNode) < 0
      ) {
        this.swap(rightIndex, index);
        this.shiftDown(rightIndex);
      }
    }
  }
  push(node) {
    this.heap.push(node);
    this.shiftUp(this.heap.length - 1);
  }
  peek() {
    return this.heap[0];
  }
  pop() {
    const node = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.shiftDown(0);
    return node;
  }
}

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function (arr, k) {
  if (arr.length < k) {
    return null;
  }
  const maxHeap = new Heap((left, right) => right - left);
  // 先把前k个数加入大根堆
  for (let index = 0; index < k; index++) {
    maxHeap.push(arr[index]);
  }
  // 后面的数，跟堆顶比较，如果比大根堆堆顶小，去掉堆顶，将当前的数存起来
  for (let index = k; index < arr.length; index++) {
    const heapNode = maxHeap.peek();
    if (arr[index] < heapNode) {
      maxHeap.pop();
      maxHeap.push(arr[index]);
    }
  }
  // 将存在大根堆的所有最小值存在数组中
  const result = [];
  let size = maxHeap.size();
  while (size) {
    result.push(maxHeap.pop());
    size--;
  }
  return result;
};
console.log(getLeastNumbers([0, 1, 2, 1], 1));
console.log(getLeastNumbers([3, 2, 1], 2));
console.log(getLeastNumbers([0, 0, 1, 2, 4, 2, 2, 3, 1, 4], 8)); //[0,0,1,1,2,2,2,3]
// const array = [0, 0, 1, 2, 4, 2, 2, 3, 1, 4];
// for (let index = 0; index < array.length; index++) {
//   heap.push(array[index]);
// }
