/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  // 先排序
  piles = piles.sort((a, b) => a - b);
  let left = 0,
    // 最大的速度取值
    right = piles[piles.length - 1];
  ans = -1;
  //   从0 到 最大的速度中找到一个最合适的时间
  while (left <= right) {
    let midIndex = ((right - left) >> 1) + left;
    if (getNeedHours(piles, midIndex) <= h) {
      // 如果需要的时间小于规定的时间，那么在继续往下找到更小的
      // 先保存当前的
      ans = midIndex;
      // 向左移动
      right = midIndex - 1;
    } else {
      // 需要的时间太长了，也就是速度太慢了
      // 向右移动，找到速度更大
      left = midIndex + 1;
    }
  }
  return ans;
};
/**
 * @param {*} piles 所有的香蕉
 * @param {*} speed 吃香蕉的速度
 * @returns 当前速度下吃完香蕉需要的时间
 */
function getNeedHours(piles, speed) {
  let ans = 0;
  for (let index = 0; index < piles.length; index++) {
    ans += Math.floor((piles[index] + speed - 1) / speed);
  }
  //   console.log(ans);
  return ans;
}
console.log(minEatingSpeed([3, 6, 7, 11], 8)); //4
console.log(minEatingSpeed([30, 11, 23, 4, 20], 5)); //30
console.log(minEatingSpeed([3, 6, 7, 11], 8)); //4
console.log(minEatingSpeed([30, 11, 23, 4, 20], 6)); //23
