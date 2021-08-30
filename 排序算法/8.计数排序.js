function countingSort(arr) {
  if (!arr || arr.length < 2) {
    return arr;
  }
  var max = Number.MIN_VALUE;
  for (var i = 0; i < arr.length; i++) {
    // 计算出额外空间的最大容量
    max = Math.max(max, arr[i]);
  }
  var bucket = new Array(max + 1).fill(0);
  for (var i = 0; i < arr.length; i++) {
    // 每一个桶的索引代表该桶指向原数组的值，存储的值为该元素出现的个数
    bucket[arr[i]]++;
  }
  var i = 0;
  for (var j = 0; j < bucket.length; j++) {
    while (bucket[j]--) {
      // 将该桶的存储的count值反向输出,比如   bucket[50] = 3   => newArr:[50,50,50]
      arr[i++] = j;
    }
  }

  return arr;
}
console.log(
  countingSort([3, 5, 38, 15, 36, 26, 27, 2, 44, 46, 4, 19, 47, 48, 50])
  //[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
);
