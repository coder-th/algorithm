/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const result = [];
  const visited = new Array(nums.length).fill(false);
  //   对数组进行排序
  nums = nums.sort((a, b) => a - b);
  // 路径：记录在 track 中
  // 选择列表：nums 中不存在于 track 的那些元素
  // 结束条件：nums 中的元素全都在 track 中出现
  function process(currentIndex, track) {
    //   结束条件
    if (currentIndex === nums.length) {
      result.push([...track]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      // 确保重复的数字只会被填一次
      if (visited[i] || (i > 0 && nums[i] === nums[i - 1] && !visited[i - 1])) {
        // 当前数字是已经重复出现过的
        continue;
      }
      const element = nums[i];
      //   做选择
      track.push(element);
      visited[i] = true;
      // 继续
      process(currentIndex + 1, track);
      // 撤销选择
      track.pop();
      visited[i] = false;
    }
  }
  process(0, []);
  return result;
};

console.log(permuteUnique([1, 1, 2]));
//  [[1,1,2],
//  [1,2,1],
//  [2,1,1]]
console.log(permuteUnique([1, 2, 3])); // [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
console.log(permuteUnique([0, 1])); // [[0,1],[1,0]]
console.log(permuteUnique([1])); // [[1]]
