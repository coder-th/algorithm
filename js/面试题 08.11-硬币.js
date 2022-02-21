/**
 * @param {number} n
 * @return {number}
 */
var waysToChange = function (n) {
  const array = [25, 10, 5, 1];
  if (n === 0) {
    return 0;
  }
  return process(array, 0, n) % 1000000007;
};

/**
 * 返回多少种计算方式
 * @param {*} array 固定参数
 * @param {*} current 当前来到的位置
 * @param {*} rest 剩余的钱数
 */
function process(array, current, rest) {
  if (current === array.length) {
    // 来到终止位置还没凑齐
    return rest === 0 ? 1 : 0;
  }
  let ans = 0;
  for (let zhangshu = 0; zhangshu * array[current] <= rest; zhangshu++) {
    ans += process(array, current + 1, rest - zhangshu * array[current]);
  }
  return ans;
}

function waysToChange2(n) {
  const array = [25, 10, 5, 1];
  if (n === 0) {
    return 0;
  }
  const N = array.length;
  let dp = new Array(N + 1);
  for (let index = 0; index < dp.length; index++) {
    const element = new Array(n + 1).fill(0);
    dp[index] = element;
  }
  dp[N][0] = 1;
  for (let current = N - 1; current >= 0; current--) {
    for (let rest = 0; rest <= n; rest++) {
      dp[current][rest] = dp[current + 1][rest];
      if (rest - array[current] >= 0) {
        dp[current][rest] += dp[current][rest - array[current]];
      }
    }
  }
  return dp[0][n] % 1000000007;
}
console.log(waysToChange2(5)); //2
console.log(waysToChange2(10)); //4
console.log(waysToChange2(900750)); //4
