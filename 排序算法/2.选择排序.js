function swap(arr, i, j) {
  var temp = arr[j];
  arr[j] = arr[i];
  arr[i] = temp;
}
function selectionSort(arr) {
  var len = arr.length;
  // 记录当前最小值的索引
  var minIndex;
  // 总共要执行的轮数
  for (var i = 0; i < len - 1; i++) {
    minIndex = i;
    // 每轮找到最小的值的索引
    for (var j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        // 如果前一个数比前一个数大，交换位置
        minIndex = j;
      }
    }
    swap(arr, i, minIndex);
  }
  return arr;
}
console.log(
  selectionSort([3, 5, 38, 15, 36, 26, 27, 2, 44, 46, 4, 19, 47, 48, 50]) //[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
);
