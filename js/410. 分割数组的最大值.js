/**
 * 这道题可以类比为
 * 有很多的小油箱，需要集中加到m个油桶里面，能接受的最小容量是多少
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
var splitArray = function (nums, m) {
  let L = 1;
  let R = 0;
  for (let index = 0; index < nums.length; index++) {
    // 不断的找，最后结果是所有数的累加和，
    R += nums[index];
  }
  //   console.log("max", R);

  //   从1到R(最大值)里面挑出一个累加和满足最接近m的数
  let ans = 0;
  while (L <= R) {
    //   当前累加和M的情况
    const M = ((R - L) >> 1) + L;
    // console.log("M", M);
    if (getNeedCount(nums, M) <= m) {
      // 需要的桶数量比能给的m还要小,说明累加和M的数太大了，变小一点
      // 先保留，因为这是符合标准的
      ans = M;
      // 向左移动
      R = M - 1;
    } else {
      L = M + 1;
    }
  }
  return ans;
};

/**
 * 所有小油箱，按照每个桶aim的容量加油，需要几个桶
 * @param {*} nums 所有的数
 * @param {*} aim 连续数的和，不能超过的数
 * @returns 返回的是，所有数按照不能超过aim的标准，进行切分需要多少个数组
 * 可以想象成加油过程:
 *      每桶油可以一直加，加到不能超过容量的aims，就加一个桶继续加，重复这样的流程，问问需要几个桶
 */
function getNeedCount(nums, aim) {
  //  如果有某个数就已经超过了aim，那么这个数永远不可能被加上(不可能被一个桶就能装好)
  // 这种直接返回最大值
  for (let index = 0; index < nums.length; index++) {
    if (nums[index] > aim) {
      return Number.MAX_SAFE_INTEGER;
    }
  }
  // 需要的桶数
  let ans = 1;
  // 当前桶的容量
  let curAll = 0;
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    if (curAll + element > aim) {
      // 如果当前桶的容量已经不够装下一个了
      curAll = element;
      ans++;
    } else {
      // 足够装
      curAll += element;
    }
  }
  return ans;
}

console.log(splitArray([7, 2, 5, 10, 8], 2)); //18
console.log(splitArray([1, 2, 3, 4, 5], 2)); //9
console.log(splitArray([1, 4, 4], 3)); //4
