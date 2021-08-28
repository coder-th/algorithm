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

