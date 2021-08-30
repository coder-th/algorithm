function sort(arr) {
  if (arr == null || arr.length < 2) {
    return;
  }
  mergeSort(arr, 0, arr.length - 1);
  return arr;
}
function mergeSort(arr, l, r) {
  if (l === r) return;
  var m = l + ((r - l) >> 1);
  mergeSort(arr, l, m);
  mergeSort(arr, m + 1, r);
  // merge过程是要层层进行的
  merge(arr, l, m, r);
}
function merge(arr, l, m, r) {
  var help = [];
  var i = 0;
  var p1 = l;
  var p2 = m + 1;
  while (p1 <= m && p2 <= r) {
    // 取得某个较小的值，赋值到help。指针向后一位
    help[i++] = arr[p1] < arr[p2] ? arr[p1++] : arr[p2++];
  }

  while (p1 <= m) {
    // 将剩下的值拷贝到help的数组
    help[i++] = arr[p1++];
  }

  while (p2 <= r) {
    help[i++] = arr[p2++];
  }

  for (var i = 0; i < help.length; i++) {
    arr[l + i] = help[i];
  }
  console.log("merge", arr);
}

console.log(
  sort([3, 5, 38, 15, 36, 26, 27])
  //[3,  5, 15, 26,27, 36, 38]
);

/**
 *        3,  5, 15, 26,27, 36, 38
 *         /         \
 *        3,5,15      26,27,36,38                 => merge
 *        /     \            /      \
 *        3  5,15           26,27    36,38        => merge
 *          /     \        /    \     /     \
 *          5     15      26    27  36      38    => merge
 */
