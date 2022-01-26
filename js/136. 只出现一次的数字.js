/**
 * @param {number[]} nums
 * @return {number}
 */
/*var singleNumber = function (nums) {
  const set = new Set();
  for (let i = 0; i < nums.length; i++) {
    // set中没有则设置，有的话就删除
    const cur = nums[i];
    if (set.has(cur)) {
      set.delete(cur);
    } else {
      set.add(cur);
    }
  }
  return Array.from(set.values()).pop();
};*/
/**
 * 使用异或
 *  a^a = 0
 *  a^0 = a
 * @param nums
 */
var singleNumber = function (nums) {
  var single;
  for (let i = 0; i < nums.length; i++) {
    single ^= nums[i];
  }
  return single;
};
console.log(singleNumber([2, 2, 1])); //1
console.log(singleNumber([4, 1, 2, 1, 2])); //4
