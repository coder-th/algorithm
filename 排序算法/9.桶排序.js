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

function bucketSort(arr, bucketSize) {
  if (!arr || arr.length < 2) return arr;
  var minValue = arr[0];
  var maxValue = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < minValue) minValue = arr[i]; // 记录数组的最小值
    if (arr[i] > maxValue) maxValue = arr[i]; // 记录数组的最大值
  }
  // 进行桶的初始化默认每个桶的区间长度为5
  const DEFAULT_BUCKET_SIZE = 5;
  bucketSize = bucketSize || DEFAULT_BUCKET_SIZE;
  // 当前需要的桶的数量
  const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
  let buckets = new Array(bucketCount);
  for (var i = 0; i < buckets.length; i++) {
    buckets[i] = [];
  }
  //利用映射函数将数据分配到各个桶中
  for (i = 0; i < arr.length; i++) {
    const bucketIndex = Math.floor((arr[i] - minValue) / bucketSize);
    buckets[bucketIndex].push(arr[i]);
  }
  arr.length = 0;
  for (i = 0; i < buckets.length; i++) {
    insertionSort(buckets[i]); //对每个桶进行排序，这里使用了插入排序
    for (var j = 0; j < buckets[i].length; j++) {
      // 依次添加每个桶的数据
      arr.push(buckets[i][j]);
    }
  }
  return arr;
}

console.log(
  bucketSort([3, 5, 38, 15, 0, 36, 26, 2, 44, 46, 4, 19, 47, 48, 50])
  //  [0, 2, 3, 4, 5, 15, 19, 26, 36, 38, 44, 46, 47, 48, 50]
);
