/**
 * @description 两数之和
 * 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
 * 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
 */

// 题目：
let exampleArr = [2, 4, 11, 7];
let target = 9;

// 暴力法
const searchTarget = (nums, target) => {
  let sum;
  let emptyArr = [];
  for (let i = 0; i < nums.length; i ++) {
    for (let j = 1; j < nums.length; j++) {
      sum = nums[i] + nums[j]
      if (sum === target) {
        emptyArr[0] = i;
        emptyArr[1] = j;
        return emptyArr;
      }
    }
  }
}

console.log("暴力法", searchTarget(exampleArr, target), time)


// 哈希表
const hashSearchTarget = (nums, target) => {
  let mapData = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (mapData.has(target - nums[i])) {
      return [mapData.get(target - nums[i]), i]
    } else {
      mapData.set(nums[i], i)
    }
  }
  return [];
}
console.log("哈希表", hashSearchTarget(exampleArr, target))




