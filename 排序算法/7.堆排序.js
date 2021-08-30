function heapSort(arr) {
  if (!arr || arr.length < 2) return arr;
  for (var i = 0; i < arr.length; i++) {
    heapInsert(arr, i);
  }
  var size = arr.length;
  swap(arr, 0, --size);
  while (size > 0) {
    heapify(arr, 0, size);
    swap(arr, 0, --size);
  }
  return arr;
}

/**
 * 大根堆插入数据
 * @param {*} arr
 * @param {*} index
 */
function heapInsert(arr, index) {
  while (arr[index] > arr[(index - 1) / 2]) {
    swap(arr, index, (index - 1) / 2);
    index = (index - 1) / 2;
  }
}

/**
 * 将普通的堆转化为大根堆
 * @param {*} arr
 * @param {*} index
 * @param {*} size
 */
function heapify(arr, index, size) {
  var left = index * 2 + 1;
  while (left < size) {
    var largest =
      left + 1 < size && arr[left + 1] > arr[left] ? left + 1 : left;
    largest = arr[largest] > arr[index] ? largest : index;
    if (largest == index) {
      break;
    }
    swap(arr, largest, index);
    index = largest;
    left = index * 2 + 1;
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
