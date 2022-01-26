class MaxHeap {
  constructor() {
    this.heap = [];
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
    let tem = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = tem;
  }
  shiftUp(index) {
    const parentIndex = this.getParentIndex(index);
    if (index !== 0 && this.heap[index] > this.heap[parentIndex]) {
      this.swap(index, parentIndex);
      this.shiftUp(parentIndex);
    }
  }
  shiftDown(index) {
    const leftIndex = this.getLeftIndex(index);
    const rightIndex = this.getRightIndex(index);
    if (this.heap[index] < this.heap[leftIndex]) {
      this.swap(index, leftIndex);
      this.shiftDown(leftIndex);
    }
    if (this.heap[index] < this.heap[rightIndex]) {
      this.swap(index, rightIndex);
      this.shiftDown(rightIndex);
    }
  }
  insert(value) {
    this.heap.push(value);
    this.shiftUp(this.heap.length - 1);
  }
  pop() {
    const ele = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.shiftDown(0);
    return ele;
  }
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const maxHeap = new MaxHeap();
  // 建造一个大顶堆
  for (let index = 0; index < nums.length; index++) {
    maxHeap.insert(nums[index]);
  }
  let ans;
  // 不断弹出第k个元素
  for (let index = 0; index < k; index++) {
    ans = maxHeap.pop();
  }
  return ans;
};

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2)); //5
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)); //4
