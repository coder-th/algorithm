/**
 * https://leetcode-cn.com/problems/maximum-number-of-events-that-can-be-attended/
 * @param {*} events
 */
/**
 * @param {number[][]} events
 * @return {number}
 */
var maxEvents = function (events) {
  // 1. 根据结束时间进行排序
  const sortedArr = sortByEnd(events);
  //2.   记录会议的结束时间和可安排的会议数目
  let end = sortedArr[0][1];
  let res = 1;
  //3. 遍历
  for (let index = 1; index < sortedArr.length; index++) {
    const element = sortedArr[index];
    // 如果当前的会议开始时间比上一次的结束时间慢，说明符合条件，可以安排这次会议
    if (end <= element[0]) {
      // 安排数目+1
      res++;
      //更新结束时间
      end = element[1];
    }
  }

  return res;
};
/**
 * 根据结束时间进行排序
 * @param {Array[]} matrix
 */
function sortByEnd(matrix) {
  return matrix.sort((a, b) => a[1] - b[1]);
}
/* console.log(
  maxEvents([
    [1, 2],
    [2, 3],
    [3, 4],
  ])
); //3
console.log(
  maxEvents([
    [1, 2],
    [2, 3],
    [3, 4],
    [1, 2],
  ])
); //4
console.log(maxEvents([[1, 100000]])); //1
console.log(
  maxEvents([
    [1, 1],
    [1, 2],
    [1, 3],
    [1, 4],
    [1, 5],
    [1, 6],
    [1, 7],
  ])
); //7 */
console.log(
  maxEvents([
    [1, 2],
    [2, 2],
    [3, 3],
    [3, 4],
    [3, 4],
  ])
); //4
