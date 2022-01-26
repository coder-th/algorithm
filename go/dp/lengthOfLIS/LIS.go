package main

import "fmt"
/**
lengthOfLIS https://leetcode-cn.com/problems/longest-increasing-subsequence/
 */
func lengthOfLIS(nums []int) int {
	// 声明一个dp数组
	dp := make([]int,len(nums))
	for i := 0; i < len(nums); i++ {
		dp[i] = 1
		for j := 0; j < i; j++ {
			// 如果前面有比我小的元素
			if nums[j] < nums[i] {
				// 状态转移方程为  f[i] = max{f[i],f[j]+1}
				dp[i] = getMax(dp[i],dp[j] +1)
			}
		}
	}
	// 已经记录了每个位置的递增序列长度值，找到最大的就是要求的最长递增序列长度
	res := 0
	for i := 0; i < len(dp); i++ {
		res = getMax(res,dp[i])
	}
	return  res
}

func getMax(a int, b int) int  {
	if a>b {
		return  a
	}else {
		return b
	}
}

func main() {
	fmt.Println(lengthOfLIS([]int{10,9,2,5,3,7,101,18})) // 4
	fmt.Println(lengthOfLIS([]int{0,1,0,3,2,3})) // 4
	fmt.Println(lengthOfLIS([]int{7,7,7,7,7,7,7})) // 1
}
