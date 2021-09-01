const arr = [3, 5, 38, 15, 0, 36, 26, 2, 44, 46, 4, 19, 47, 48, 50];
function radixSort(arr, maxDigit) {
  var mod = 10;
  var dev = 1;
  var counter = new Array(10);
  for (var i = 0; i < maxDigit; i++, dev *= 10, mod *= 10) {
    for (var j = 0; j < arr.length; j++) {
      var bucket = parseInt((arr[j] % mod) / dev);
      if (counter[bucket] == null) {
        counter[bucket] = [];
      }
      // 存储当前位数与空间索引相同的数到对应位置   比如  13 => bucket[3] = 13
      counter[bucket].push(arr[j]);
    }
    var pos = 0;
    for (var j = 0; j < counter.length; j++) {
      var value = null;
      if (counter[j] != null) {
        while ((value = counter[j].shift()) != null) {
          //遵循先进先出的原则
          // 重组arr,实现当前计算位数的升序
          arr[pos++] = value;
        }
      }
    }
  }
  return arr;
}

console.log(
  radixSort(arr, getMaxBit(arr))
  //  [0, 2, 3, 4, 5, 15, 19, 26, 36, 38, 44, 46, 47, 48, 50]
);
/**
 * 获取最大位数
 */
function getMaxBit(arr) {
  var max = Number.MIN_SAFE_INTEGER;
  for (var i = 0; i < arr.length; i++) {
    max = Math.max(max, arr[i]);
  }
  var res = 0;
  while (max != 0) {
    res++;
    max = Math.floor(max / 10);
  }
  return res;
}

/**
 * 获取某个数字在某一位上的数字
 * @param {*} x
 * @param {*} d
 */
function getDigit(x, d) {
  return Math.floor(x / Math.pow(10, d - 1)) % 10;
}

function radixSort2(arr) {
  if (!arr || arr.length < 2) return arr;
  partition(arr, 0, arr.length - 1, getMaxBit(arr));
  return arr;
}

function partition(arr, begin, end, digit) {
  const radix = 10;
  var i = 0,
    j = 0;

  var bucket = new Array(end - begin + 1).fill(0);
  for (var d = 1; d <= digit; d++) {
    var count = new Array(radix).fill(0);
    for (i = begin; i <= end; i++) {
      j = getDigit(arr[i], d);
      // 记录符合当前位数的数字的个数
      count[j]++;
    }
    for (i = 1; i < radix; i++) {
      // 将小于该位数的数字和统计，作用是可以确保该位数的数字能够在准确的位置上
      count[i] = count[i] + count[i - 1];
    }
    for (i = end; i >= begin; i--) {
      j = getDigit(arr[i], d);
      bucket[count[j] - 1] = arr[i];
      count[j]--;
    }
    for (i = begin, j = 0; i <= end; i++, j++) {
      arr[i] = bucket[j];
    }
  }
}

console.log(
  radixSort2(arr)
  //  [0, 2, 3, 4, 5, 15, 19, 26, 36, 38, 44, 46, 47, 48, 50]
);
