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
    if (this.heap.length === 0) {
      return null;
    } else if (this.heap.length === 1) {
      return this.heap.pop();
    } else {
      const node = this.heap[0];
      if (node) {
        console.log("before", this.heap);
        // 删除最后一个节点，放置到头结点
        const last = this.heap.pop();
        this.heap[0] = last;
        console.log("after", this.heap);
        // 开始向下调整
        this.shiftDown(0);
        return node;
      } else {
        return null;
      }
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
      this.compare(this.heap[parentIndex], this.heap[index]) < 0
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
      if (leftNode && this.compare(leftNode, this.heap[index]) > 0) {
        if (rightNode && this.compare(rightNode, leftNode) > 0) {
          // 右节点比左节点还小，那么先处理右节点的
          this.swap(rightIndex, index);
          this.shiftDown(rightIndex);
        } else {
          // 处理左节点
          this.swap(leftIndex, index);
          this.shiftDown(leftIndex);
        }
      } else if (rightNode && this.compare(rightNode, this.heap[index]) > 0) {
        this.swap(rightIndex, index);
        this.shiftDown(index);
      }
    }
  }
}

const minHeap = new Heap((parent, child) => {
  return child - parent;
});
/* minHeap.push(9);
minHeap.push(12);
minHeap.push(4);
minHeap.push(7);
minHeap.push(4);
let curIndex = 0;
const size = minHeap.size();
while (curIndex < size) {
  const node = minHeap.pop();
  console.log("node", node, minHeap.size());
  curIndex++;
} */

class Node {
  constructor(index1, index2, sum) {
    this.index1 = index1;
    this.index2 = index2;
    this.sum = sum;
  }
}
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function (nums1, nums2, k) {
  const m = nums1.length,
    n = nums2.length;
  if (m === 0 || n === 0 || k === 0) {
    return null;
  }
  // 防止k超过两个数组的组合种数
  k = Math.min(k, m * n);
  let curIndex = 0;
  let res = [];
  //   用来保存每个组合数出现的情况
  let set = new Array(m).fill(new Array(n).fill(false));
  const minHeap = new Heap(function compare(parent, child) {
    return child.sum - parent.sum;
  });
  //   初始化
  // 最开始将两个数组最小的添加到小根堆中
  minHeap.push(new Node(0, 0, nums1[0] + nums2[0]));
  set[0][0] = true;

  //   循环K次
  while (curIndex !== k) {
    console.log("before", minHeap);
    //   从小根堆弹出一个
    const node = minHeap.pop();
    const { index1, index2 } = node;
    res[curIndex++] = [nums1[index1], nums2[index2]];
    //   记录当前节点的右方节点
    if (index1 + 1 < m && !set[index1 + 1][index2]) {
      set[index1 + 1][index2] = true;
      minHeap.push(
        new Node(index1 + 1, index2, nums1[index1 + 1] + nums2[index2])
      );
    }
    // 记录当前节点下方节点
    if (index2 + 1 < n && !set[index1][index2 + 1]) {
      set[index1][index2 + 1] = true;
      minHeap.push(
        new Node(index1, index2 + 1, nums1[index1] + nums2[index2 + 1])
      );
    }
    console.log("after", minHeap);
  }
  return res;
};
/* console.log(kSmallestPairs([1, 7, 11], [2, 4, 6], 3)); //[1,2],[1,4],[1,6]
console.log(kSmallestPairs([1, 1, 2], [1, 2, 3], 2)); //[1,1],[1,1] */
console.log(kSmallestPairs([1, 2], [3], 3)); //[1,3],[2,3]
