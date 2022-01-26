class MinHeap {
  constructor() {
    this.heap = [];
  }
  /**
   * 交换两个元素
   * @param {*} i
   * @param {*} j
   */
  swap(i, j) {
    let temp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temp;
  }
  /**
   * 获取父节点的Index
   * @param {*} index
   * @returns
   */
  getParentIndex(index) {
    return (index - 1) >> 1;
  }
  /**
   * 获取左孩子节点的Index
   * @param {*} index
   * @returns
   */
  getLeftIndex(index) {
    return index * 2 + 1;
  }
  /**
   * 获取右孩子节点的Index
   * @param {*} index
   * @returns
   */
  getRightIndex(index) {
    return index * 2 + 2;
  }
  /**
   * 将元素往上提，只需要对比父节点，直到找到最小元素的位置
   * https://oss.liweihao.cn/blog/202201191212048.gif
   * @param {*} index
   */
  shiftUp(index) {
    //   第一个元素
    if (index === 0) return;
    const parentIndex = this.getParentIndex(index);
    if (this.heap[index] < this.heap[parentIndex]) {
      // 如果我比父节点还要小，说明父节点要跟我交换，
      this.swap(parentIndex, index);
      // 重复这样的过程直到我该呆的位置
      this.shiftUp(parentIndex);
    }
  }
  /**
   * 元素往下移动，需要考虑左子节点和右子节点
      https://oss.liweihao.cn/blog/202201191226722.gif
   * @param {*} index
   */
  shiftDown(index) {
    //   得到左节点和右节点的索引
    const leftIndex = this.getLeftIndex(index);
    const rightIndex = this.getRightIndex(index);
    if (this.heap[index] > this.heap[leftIndex]) {
      // 当前节点比左子节点还要大，交换，
      this.swap(leftIndex, index);
      // 继续找
      this.shiftDown(leftIndex);
    }
    if (this.heap[index] > this.heap[rightIndex]) {
      // 当前节点比右子节点还要大，交换，
      this.swap(rightIndex, index);
      // 继续找
      this.shiftDown(rightIndex);
    }
  }
  /**
   * 向小根堆插入一个值
   * @param {*} value
   */
  insert(value) {
    // 先加个元素到最后
    this.heap.push(value);
    // 往上找到合适的位置
    this.shiftUp(this.heap.length - 1);
  }
  /**
   * 小根堆删除一个,删除出来的元素都是每一次状态的最小值
   */
  pop() {
    // 如果小根堆没有元素了
    if (!this.size()) {
      throw new Error("没有元素了");
    } else if (this.size() === 1) {
      // 如果小根堆只有一个元素了
      // 直接弹出
      return this.heap.pop();
    }
    // 先存一下第一个元素
    const min = this.heap[0];
    //从最后一个元素弹出一个元素并且将它提到第一个元素
    this.heap[0] = this.heap.pop();
    //开始向下整和，从新变成小根堆
    this.shiftDown(0);
    return min;
  }
  /**
   * 返回当前堆的长度
   * @returns
   *
   */
  size() {
    return this.heap.length;
  }
}
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

/* const heap = new MinHeap();
[...new Array(10).keys()]
  .reverse()
  .map((value) => value + 1)
  .forEach((value) => {
    heap.insert(value);
  });
while (heap.size()) {
  const ele = heap.pop();
  console.log(ele, heap.size());
} */

/**
 * 实现一个大根堆
 */

class MaxHeap {
  constructor() {
    this.heap = [];
  }
  /**
   * 获取父节点的Index
   * @param {Number} index
   * @returns
   */
  getParentIndex(index) {
    return (index - 1) >> 1;
  }
  /**
   * 获取左节点的索引
   * @param {*} index
   * @returns
   */
  getLeftNodeIndex(index) {
    return index * 2 + 1;
  }
  /**
   * 获取右节点的索引
   * @param {*} index
   * @returns
   */
  getRightNodeIndex(index) {
    return index * 2 + 2;
  }
  /**
   * 交换两个节点的位置
   * @param {*} i
   * @param {*} j
   */
  swap(i, j) {
    let tmp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = tmp;
  }
  /**
   * 将索引index的元素往上移动
   * @param {*} index
   */
  shiftUp(index) {
    if (index === 0) return;
    // 获取父节点的索引
    const parentIndex = this.getParentIndex(index);
    // 当我比父节点还要大，那我就往上移动
    if (this.heap[index] > this.heap[parentIndex]) {
      // 交换位置
      this.swap(index, parentIndex);
      //继续移动
      this.shiftUp(parentIndex);
    }
  }
  /**
   * 将索引index的元素往下移动
   * @param {*} index
   */
  shiftDown(index) {
    const leftNode = this.getLeftNodeIndex(index);
    const rightNode = this.getRightNodeIndex(index);
    // 如果我比左子节点还要小,我就向左下
    if (this.heap[index] < this.heap[leftNode]) {
      this.swap(index, leftNode);
      this.shiftDown(leftNode);
    }
    // 如果我比右子节点还要小,我就向右下
    if (this.heap[index] < this.heap[rightNode]) {
      this.swap(index, rightNode);
      this.shiftDown(rightNode);
    }
  }

  /**
   * 增加一个元素到大根堆
   * @param {*} value
   */
  insert(value) {
    // 先将当前元素加到heap数组中
    this.heap.push(value);
    // 在将当前的元素往上移动到合适的位置
    this.shiftUp(this.heap.length - 1);
  }
  /**
   * 从大根堆里弹出一个元素
   */
  pop() {
    // 如果小根堆没有元素了
    if (!this.size()) {
      throw new Error("没有元素了");
    } else if (this.size() === 1) {
      // 如果小根堆只有一个元素了
      // 直接弹出
      return this.heap.pop();
    }
    //先保留大根堆的第一个元素
    const head = this.heap[0];
    // 弹出最后一个元素移动到头结点
    this.heap[0] = this.heap.pop();
    // 往下找到合适的位置
    this.shiftDown(0);
    // 返回保留的数
    return head;
  }
  /**
   * 获取当前大根堆的大小
   */
  size() {
    return this.heap.length;
  }
  /**
   * 获取index的元素
   * @param {*} index
   */
  peek(index) {
    return this.heap[index];
  }
}
const heap = new MaxHeap();
[...new Array(10).keys()]
  .reverse()
  .map((value) => value + 1)
  .forEach((value) => {
    heap.insert(value);
  });
while (heap.size()) {
  const ele = heap.pop();
  console.log(ele, heap.size());
}
