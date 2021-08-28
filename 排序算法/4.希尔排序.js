function shellSort(arr) {
  var len = arr.length,
    current,
    subAreaLen = 1;
  while (subAreaLen < len / 3) {
    //动态定义间隔序列
    subAreaLen = subAreaLen * 3 + 1;
  }
  for (var gap = subAreaLen; gap > 0; gap = Math.floor(gap / 3)) {
    for (var i = gap; i < len; i++) {
      current = arr[i];
      var preIndex = i - gap;
      while (preIndex >= 0 && arr[preIndex] > current) {
        arr[preIndex + gap] = arr[preIndex];
        preIndex -= gap;
      }
      arr[preIndex + gap] = current;
    }
  }
  return arr;
}

console.log(
  shellSort([3, 5, 38, 15, 36, 26, 27, 2, 44, 46, 4, 19, 47, 48, 50])
  //[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
);
