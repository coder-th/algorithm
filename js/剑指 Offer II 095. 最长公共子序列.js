/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  const m = text1.length,
    n = text2.length;
  // dp定义: 保存text1[...i]和text2[...j]的最长公共子序列的长度
  const dp = new Array(m).fill(new Array(n).fill(0));
  dp[0][0] = text1[0] === text2[0] ? 1 : 0;
  // 先填好第一行的情况(只拿str2的第一个字符，如果相等，说明后续都是)
  for (let i = 1; i < m; i++) {
    dp[i][0] = text1[i] === text2[0] ? 1 : dp[i - 1][0];
  }
  // 先填好第一列的情况(只拿str1的第一个字符，如果相等，说明后续都是)
  for (let j = 1; j < n; j++) {
    dp[0][j] = text1[0] === text2[j] ? 1 : dp[0][j - 1];
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      /**
       * dp[i][j] 的来源有四种情况
       *  1. dp[i][j] = dp[i-1][j]                => 公共子序列不以 str1[i] 结尾,但以 str2[j] 结尾
       *  2. dp[i][j] = dp[i][j-1]                => 公共子序列以 str1[i] 结尾 但不以 str2[j] 结尾
       *  3. dp[i][j] = dp[i-1][j-1]              => 公共子序列刚好不以 str1[i] 和 str2[j] 结尾
       *  4. dp[i][j] = dp[i-1][j-1] +1           => 公共子序列刚好以 str1[i] 和 str2[j] 同时结尾(条件必须是最后一位字符相同:str1[i] === str2[j])
       */
      const corner =
        text1[i] === text2[j] ? dp[i - 1][j - 1] + 1 : dp[i - 1][j - 1];
      dp[i][j] = Math.max(corner, Math.max(dp[i - 1][j], dp[i][j - 1]));
      //   if (text1[i] === text2[j]) {
      //     dp[i][j] = Math.max(dp[i][j], dp[i - 1][j - 1] + 1);
      //   }
    }
  }
  return dp[m - 1][n - 1];
};
var longestCommonSubsequenceTest = function (text1, text2) {
  const m = text1.length,
    n = text2.length;
  const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[m][n];
};

// console.log(longestCommonSubsequence("abcde", "ace")); //3
// console.log(longestCommonSubsequence("abc", "abc")); //3
// console.log(longestCommonSubsequence("abc", "def")); //0
// console.log(longestCommonSubsequence("bl", "yby")); //1
// console.log(longestCommonSubsequenceTest("bl", "yby")); //1
console.log(longestCommonSubsequence("oxcpqrsvwf", "shmtulqrypy")); //2
console.log(longestCommonSubsequenceTest("oxcpqrsvwf", "shmtulqrypy")); //2
