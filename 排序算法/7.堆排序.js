function heapSort(arr) {
  if (!arr || arr.length < 2) return arr;
  //   1.创建一个大顶堆
  buildMaxHeap(arr);
  var size = arr.length;
  for (var i = arr.length - 1; i > 0; i--) {
    // 2.把堆首（最大值）和堆尾互换；
    swap(arr, 0, i);
    // 3.把堆的尺寸缩小 1，目的是把新的数组顶端数据调整到相应位置；
    heapify(arr, 0, --size);
    // 重复步骤 2，直到堆的尺寸为 1。
  }
  return arr;
}
/**
 * 创建一个大顶堆
 * @param {*} arr
 */
function buildMaxHeap(arr) {
  for (var i = Math.floor(arr.length / 2); i >= 0; i--) {
    // 因为叶节点不会有孩子，所以可以不用构建堆，减少构建次数
    heapify(arr, i);
  }
}
/**
 * 将普通的堆转化为大根堆
 * @param {*} arr
 * @param {*} index
 * @param {*} size
 */
function heapify(arr, index, size = arr.length) {
  var left = index * 2 + 1;
  var right = index * 2 + 2;
  var largest = index;
  if (left < size && arr[left] > arr[largest]) {
    // 左孩子比父节点大
    largest = left;
  }
  if (right < size && arr[right] > arr[largest]) {
    // 右孩子比父节点大
    largest = right;
  }
  if (largest !== index) {
    swap(arr, index, largest);
    heapify(arr, largest, size);
  }
}

function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

console.log(
  heapSort([3, 5, 38, 15, 36, 26, 27, 2, 44, 46, 4, 19, 47, 48, 50])
  //[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
);
