/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
/*var merge = function (nums1, m, nums2, n) {
  // 左右两个指针
  var left = 0,
    right = 0;
  while (left <= m) {
    if (nums1[left] > nums2[right]) {
      // 左边大于右边，
      // 左边的下一项移植最后
      nums1[m + n - 1] = nums1[left + 1];
      // 下一项等于上一项
      nums1[left + 1] = nums1[left];
      // 当前项等于右项
      nums1[left] = nums2[right];
      // 左右指针分别有移动
      left += 2;
      right += 1;
    } else {
      left += 1;
    }
  }
  if (right <= n) {
    left += 1;
    //  此时，右指针还没完毕
    nums1[left] = nums2[right];
    right += 1;
  }
  return nums1;
};*/
// 采用队列双指针的做法
/*var merge = function (nums1, m, nums2, n) {
  // 左右指针
  var p1 = 0,
    p2 = 0;
  // 临时变量，保存排好序的数
  var sorted = [];
  var cur;
  // 看成两个队列，不断的将第一个值进行比较,找到较小的那个数
  while (p1 < m || p2 < n) {
    if (p1 === m) {
      // 说明nums1的元素已经迭代完成
      // 不断添加nums2
      cur = nums2[p2++];
    } else if (p2 === n) {
      cur = nums1[p1++];
    } else if (nums1[p1] <= nums2[p2]) {
      cur = nums1[p1++];
    } else {
      cur = nums2[p2++];
    }
    sorted[p1 + p2 - 1] = cur;
  }
  sorted.forEach((item, index) => {
    nums1[index] = item;
  });

  return nums1;
};*/
/**
 * 逆向排序双指针
 * @param nums1
 * @param m
 * @param nums2
 * @param n
 */
var merge = function (nums1, m, nums2, n) {
  var left = m - 1,
    right = n - 1,
    tail = m + n - 1,
    cur;
  while (left > -1 || right > -1) {
    if (left === -1) {
      // 说明nums1已经全部遍历
      cur = nums2[right--];
    } else if (right === -1) {
      cur = nums1[left--];
    } else if (nums1[left] <= nums2[right]) {
      cur = nums2[right--];
    } else {
      cur = nums1[left--];
    }
    nums1[tail] = cur;
    tail--;
  }
  return nums1;
};
console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)); //  [1,2,2,3,5,6]
console.log(merge([1], 1, [], 0)); //[1]
console.log(merge([0], 0, [1], 1)); // [1]
