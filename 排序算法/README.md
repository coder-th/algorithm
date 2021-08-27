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

