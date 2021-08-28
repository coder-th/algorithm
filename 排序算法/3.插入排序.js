function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    //   当前要拿出来比较的数
    const current = arr[i];
    // 记录当前被比较的数的索引
    let preIndex = i - 1;
    while (preIndex >= 0 && arr[preIndex] > current) {
      // 当被比较的数比当前的数大，那么往后移动一位
      arr[preIndex + 1] = arr[preIndex];
      preIndex--;
    }
    // 找到的数不再大于当前的数或者已经到尽头了，把当前的数插入到被比较的数后面
    arr[preIndex + 1] = current;
  }
  return arr;
}
console.log(
  insertionSort([3, 5, 38, 15, 36, 26, 27, 2, 44, 46, 4, 19, 47, 48, 50])
  //[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
);
