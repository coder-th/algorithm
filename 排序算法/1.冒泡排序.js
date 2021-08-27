function swap(arr, i, j) {
  var temp = arr[j];
  arr[j] = arr[i];
  arr[i] = temp;
}
function bubbleSort(arr) {
  var len = arr.length;
  // 总共要执行的轮数
  for (var i = 0; i < len - 1; i++) {
    // 每轮进行比较的次数
    for (var j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // 如果前一个数比前一个数大，交换位置
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}
console.log(
  bubbleSort([3, 5, 38, 15, 36, 26, 27, 2, 44, 46, 4, 19, 47, 48, 50]) //[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
);
