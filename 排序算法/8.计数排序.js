function countingSort(arr) {
  if (!arr || arr.length < 2) {
    return arr;
  }
  var max = Number.MIN_VALUE;
  var min = 0; // min => 作用就是可以兼容负数的情况，达到扩容的目的
  for (var i = 0; i < arr.length; i++) {
    // 计算出数组的最大值和最小值
    max = Math.max(max, arr[i]);
    min = Math.min(min, arr[i]);
  }
  var bucket = new Array(max - min + 1).fill(0);
  for (var i = 0; i < arr.length; i++) {
    // 每一个桶的索引代表该桶指向原数组的值，存储的值为该元素出现的个数
    bucket[arr[i] - min]++;
  }
  var i = 0;
  for (var j = 0; j < bucket.length; j++) {
    while (bucket[j]--) {
      // 将该桶的存储的count值反向输出,比如   bucket[50] = 3   => newArr:[50,50,50]
      arr[i++] = j + min;
    }
  }

  return arr;
}
console.log(
  countingSort([3, 5, 38, 15, -6, 0, 36, 26, -27, 2, 44, 46, 4, 19, 47, 48, 50])
  //  [-27, -6, 0 ,  2,  3,  4,  5,15, 19, 26, 36, 38, 44,46, 47, 48, 50]
);
