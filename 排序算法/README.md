# 十大经典排序算法总结

## 算法比较

每个算法都有自己的时间复杂度，稳定性特征，以下是十大经典算法的常见指标对比图

![常见指标对比图](https://raw.githubusercontent.com/coder-th/static/master/20210827162509.png)

## 算法指标

### 时间复杂度

当我们比对算法的优劣时候，有限考虑比对的是时间复杂度，常用`O表示法`。这里就不在多叙述。

请注意，当我们的`O`指标都相同了，也就是说等级是一样，不能通过常数项来进行比对，这个是没有正比关系的，这个一般得进行实际运算才可以确定；

打比方说有这样的两个表达式`a`=>`O(9999N^2+200N)`和`b`=>`O(N^2)`，你不能说`b`的要好一些，这跟函数具体的运算是有关系的，比如说，假如`b`进行的是常数的`+-*/`之类的常数操作，但是`a`运行的是`^|&`之类的位运算操作，很明显位运算要优于常数运算的。这时候的常数项指标`9999`就显得很鸡肋了。

## 算法内容

### 冒泡排序

#### 算法步骤

- 比较相邻的元素。如果第一个比第二个大，就交换他们两个。

- 对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对。这步做完后，最后的元素会是最大的数。

- 针对所有的元素重复以上的步骤，除了最后一个。

- 持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较

#### 图片演示

![冒泡排序](https://raw.githubusercontent.com/coder-th/static/master/bubbleSort.gif)

#### 代码实现

```javascript
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
  bubbleSort([3, 5, 38, 15, 36, 26, 27, 2, 44, 46, 4, 19, 47, 48, 50]) 
  //[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
);

```

### 选择排序

选择排序是一种简单直观的排序算法，无论什么数据进去都是 O(n²) 的时间复杂度。所以用到它的时候，数据规模越小越好。唯一的好处可能就是不占用额外的内存空间了吧。

#### 算法步骤

1. 首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置。

2. 再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。

3. 重复第二步，直到所有元素均排序完毕。

#### 图片演示

![选择排序](https://raw.githubusercontent.com/coder-th/static/master/selectionSort.gif)

#### 代码实现

```javascript
function swap(arr, i, j) {
  var temp = arr[j];
  arr[j] = arr[i];
  arr[i] = temp;
}
function selectionSort(arr) {
  var len = arr.length;
  // 记录当前最小值的索引
  var minIndex;
  // 总共要执行的轮数
  for (var i = 0; i < len - 1; i++) {
    minIndex = i;
    // 每轮找到最小的值的索引
    for (var j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        // 如果前一个数比前一个数大，交换位置
        minIndex = j;
      }
    }
    swap(arr, i, minIndex);
  }
  return arr;
}
console.log(
  selectionSort([3, 5, 38, 15, 36, 26, 27, 2, 44, 46, 4, 19, 47, 48, 50]) //[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
);
```

### 插入排序

插入排序是一种最简单直观的排序算法，它的工作原理是通过构建有序序列，对于未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入。插入排序和冒泡排序一样，也有一种优化算法，叫做拆半插入。

#### 算法步骤

1. 将第一待排序序列第一个元素看做一个有序序列，把第二个元素到最后一个元素当成是未排序序列。

2. 从头到尾依次扫描未排序序列，将扫描到的每个元素插入有序序列的适当位置。（如果待插入的元素与有序序列中的某个元素相等，则将待插入元素插入到相等元素的后面。）

#### 动画演示

![插入排序](https://raw.githubusercontent.com/coder-th/static/master/202108281049811.gif)

#### 代码演示

```javascript
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
```

### 希尔排序(了解)

希尔排序，也称递减增量排序算法，是插入排序的一种更高效的改进版本。但希尔排序是非稳定排序算法。

希尔排序是基于插入排序的以下两点性质而提出改进方法的：

- 插入排序在对几乎已经排好序的数据操作时，效率高，即可以达到线性排序的效率；
- 但插入排序一般来说是低效的，因为插入排序每次只能将数据移动一位；

希尔排序的基本思想是：先将整个待排序的记录序列分割成为若干子序列分别进行直接插入排序，待整个序列中的记录"基本有序"时，再对全体记录进行依次直接插入排序。

#### 算法步骤

选择一个增量序列 t1，t2，……，tk，其中 ti > tj, tk = 1；

按增量序列个数 k，对序列进行 k 趟排序；

每趟排序，根据对应的增量 ti，将待排序列分割成若干长度为 m 的子序列，分别对各子表进行直接插入排序。仅增量因子为 1 时，整个序列作为一个表来处理，表长度即为整个序列的长度。

#### 动画演示

![希尔排序](https://raw.githubusercontent.com/coder-th/static/master/202108281149133.png)

#### 代码实现

```javascript
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
```

### 归并排序

归并排序（Merge sort）是建立在归并操作上的一种有效的排序算法。该算法是采用分治法（Divide and Conquer）的一个非常典型的应用。

#### 算法步骤

1. 申请空间，使其大小为两个已经排序序列之和，该空间用来存放合并后的序列；
2. 设定两个指针，最初位置分别为两个已经排序序列的起始位置；
3. 比较两个指针所指向的元素，选择相对小的元素放入到合并空间，并移动指针到下一位置；
4. 重复步骤 3 直到某一指针达到序列尾；
5. 将另一序列剩下的所有元素直接复制到合并序列尾。

#### 动画演示

![归并排序](https://raw.githubusercontent.com/coder-th/static/master/202108300933266.gif)

#### 代码实现

```javascript
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
 *       3,  5, 15, 26,27, 36, 38
 *         /         \
 *        3,5,15      26,27,36,38                 => merge
 *        /     \            /      \
 *        3  5,15           26,27    36,38        => merge
 *          /     \        /    \     /     \
 *          5     15      26    27  36      38    => merge
 */
```

#### 时间复杂度的计算

由于递归是很经典的分而治之的策略，遵循`master公式`。

`master`公式（也称主方法）是用来利用分治策略来解决问题经常使用的时间复杂度的分析方法，（补充：分治策略的递归解法还有两个常用的方法叫做代入法和递归树法），众所周知，分治策略中使用递归来求解问题分为三步走，分别为分解、解决和合并，所以主方法的表现形式：

`T [n] = aT[n/b] + f (n)`（直接记为`T [n] = aT[n/b] + T (N^d`)）

其中 `a >= 1` and `b > 1` 是常量，其表示的意义是

- `n`表示问题的规模，
- `a`表示递归的次数也就是生成的子问题数，
- `b`表示每次递归是原来的`1/b`之一个规模，`f（n）`表示分解和合并所要花费的时间之和。
- `d`表示子过程的时间复杂度

**最终解法**

1. 当`d<logb a`时，时间复杂度为`O(n^(logb a))`
2. 当`d=logb a`时，时间复杂度为`O((n^d)*logn)`
3. 当`d>logb a`时，时间复杂度为`O(n^d)`

**示例**

我们的归并排序

1. `a`是**2**，因为`mergeSort`调用了两次;
2. `b`是**2**，因为我们每次执行的区间的数量是原来的`1/2`;
3. `d`是**1**，因为`mergeSort`函数内部做的事情只是将区间缩小。时间复杂度为`O(n)`

所以最终结果，归并排序的时间复杂度是`O(NlogN)`,额外空间复杂度是`O(N)`

### 快速排序

#### 算法步骤

#### 动画演示

![快速排序](https://raw.githubusercontent.com/coder-th/static/master/202108301733303.gif)

#### 代码实现

```javascript
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
```

### 堆排序

#### 算法步骤

1. 创建一个大顶堆 H[0…R]
2. *把堆首（最大值）和堆尾互换；*
3. 把堆的尺寸缩小 1，目的是把新的数组顶端数据调整到相应位置；
4. 重复步骤 2，直到堆的尺寸为 1。

#### 动画演示

![堆排序](https://raw.githubusercontent.com/coder-th/static/master/202108310933252.gif)

![堆排序](https://raw.githubusercontent.com/coder-th/static/master/202108310933183.gif)

#### 代码实现

```javascript
function heapSort(arr) {
  if (!arr || arr.length < 2) return arr;
  //   1.创建一个大顶堆
  buildMaxHeap(arr);
  var size = arr.length;
  for (var i = arr.length - 1; i > 0; i--) {
    // 2.把堆首（最大值）和堆尾互换；
    swap(arr, 0, i);
    // 3.把堆的尺寸缩小 1，目的是把新的数组顶端数据调整到相应位置；
    heapify(arr, 0, --size);
    // 重复步骤 2，直到堆的尺寸为 1。
  }
  return arr;
}
/**
 * 创建一个大顶堆
 * @param {*} arr
 */
function buildMaxHeap(arr) {
  for (var i = Math.floor(arr.length / 2); i >= 0; i--) {
    // 因为叶节点不会有孩子，所以可以不用构建堆，减少构建次数
    heapify(arr, i);
  }
}
/**
 * 将普通的堆转化为大根堆
 * @param {*} arr
 * @param {*} index
 * @param {*} size
 */
function heapify(arr, index, size = arr.length) {
  var left = index * 2 + 1;
  var right = index * 2 + 2;
  var largest = index;
  if (left < size && arr[left] > arr[largest]) {
    // 左孩子比父节点大
    largest = left;
  }
  if (right < size && arr[right] > arr[largest]) {
    // 右孩子比父节点大
    largest = right;
  }
  if (largest !== index) {
    swap(arr, index, largest);
    heapify(arr, largest, size);
  }
}

function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

console.log(
  heapSort([3, 5, 38, 15, 36, 26, 27, 2, 44, 46, 4, 19, 47, 48, 50])
  //[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
);
```

### 计数排序

#### 算法步骤

- （1）找出待排序的数组中最大和最小的元素
- （2）统计数组中每个值为i的元素出现的次数，存入数组C的第i项
- （3）对所有的计数累加（从C中的第一个元素开始，每一项和前一项相加）
- （4）反向填充目标数组：将每个元素i放在新数组的第C(i)项，每放一个元素就将C(i)减去1

#### 使用条件

- 只能用在数据范围不大的场景中，若数据范围 k 比要排序的数据 n 大很多，就不适合用计数排序。
- 计数排序只能给非负整数排序，其他类型需要在不改变相对大小情况下，转换为非负整数。
- 比如如果考试成绩精确到小数后一位，就需要将所有分数乘以 10，转换为整数。

#### 动画演示

![计数排序](https://raw.githubusercontent.com/coder-th/static/master/202108311226874.gif)

#### 代码实现

```javascript
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

```

### 桶排序

#### 算法步骤

1. 确定桶的数量，每个桶的数据范围;
2. 将数组中的值按照数据范围放在合适的桶里;
3. 将每个桶的数据进行排序;
4. 依次将每个桶的数据进行添加到数组中

#### 动画演示

![桶排序](https://raw.githubusercontent.com/coder-th/static/master/202108311439989.gif)

#### 代码实现

```javascript
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

```

