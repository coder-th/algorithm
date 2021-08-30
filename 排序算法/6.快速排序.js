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
    quickSort(arr, l, p[0] - 1);
    quickSort(arr, p[1] + 1, r);
  }
}

function partition(arr, l, r) {
  var less = l - 1; // <区
  var more = r; // >区
  while (l < more) {
    if (arr[l] < arr[r]) {
      // 当前数小，<区向右扩，交换值，当前数指针向后
      swap(arr, ++less, l++);
    } else if (arr[l] > arr[r]) {
      // 当前数大，>区向左扩，交换值，当前数指针不动，
      swap(arr, --more, l);
    } else {
      // 相等，那这个位置就不管了，指针继续往后移
      l++;
    }
  }
  swap(arr, more, r);
  return [less + 1, more];
}

console.log(
  sort([3, 5, 38, 15, 36, 26, 27, 2, 44, 46, 4, 19, 47, 48, 50])
  //[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
);


