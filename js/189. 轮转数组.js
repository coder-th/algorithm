/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  //保存原数组到临时数组
    var temp = [...nums]
    var len = nums.length
    // 将临时数组中 第i+k位置的数替换到i上
    for (let i = 0; i < len; i++) {
        // 找到被替换的索引，（i+k）% len 可以很巧妙的解决 i+k超过Len时的问题
        var placeIndex = (i+k)%len
        nums[placeIndex] = temp[i]
    }
    return nums
};
console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3)); // [5,6,7,1,2,3,4]
console.log(rotate([-1, -100, 3, 99], 2)); // [3,99,-1,-100]
