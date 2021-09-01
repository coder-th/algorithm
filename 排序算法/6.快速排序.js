function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function sort(arr) {
  if (!arr || arr.length < 2) {
    return;
  }
  quickSort(arr, 0, arr.length - 1);
  return arr;
}

function quickSort(arr, l, r) {
  if (l < r) {
    // 使用随机数，可以让最坏情况发生的事情变成概率事件，从而降低复杂度
    var random = Math.floor(Math.random() * (r - l + 1));
    swap(arr, l + random, r);
    var p = partition(arr, l, r);
    // 小于区继续进行分区排序
    quickSort(arr, l, p[0] - 1);
    // 大于区继续进行分区排序
    quickSort(arr, p[1] + 1, r);
  }
}

function partition(arr, l, r) {
  var less = l - 1; // “小于”区开始的索引
  var more = r; // “大于”区开始的索引
  var cur = l; // 当前比较的索引
  var compare = r; // 被比较的索引
  while (cur < more) {
    if (arr[cur] < arr[compare]) {
      // 当前数小，<区向右扩，交换值，当前数指针向后
      swap(arr, ++less, cur);
      cur++;
    } else if (arr[cur] > arr[compare]) {
      // 当前数大，>区向左扩，交换值，当前数指针不动，
      swap(arr, --more, cur);
    } else {
      // 相等，那这个位置就不管了，指针继续往后移
      cur++;
    }
  }
  // 大于区与被比较的索引交换位置
  swap(arr, more, compare);
  // 返回中间的区域
  return [less + 1, more];
}

console.log(
  sort([3, 5, 38, 15, 36, 26, 27, 2, 44, 46, 4, 19, 47, 48, 50])
  //[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
);
