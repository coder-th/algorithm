package main

import "fmt"
/*
	118. 杨辉三角
		 https://leetcode-cn.com/problems/pascals-triangle/
*/
func generate(numRows int) [][]int {
	dp := make([][]int,numRows)

	// 遍历行
	for i := 0; i < numRows; i++ {
		// 申请空间
		col := make([]int,i+1)
		dp[i] = col
		// 第一行
		if i== 0 {
			dp[0][0] = 1
		}else {
			// 遍历列
			for j := 0; j <= i; j++ {
				if j==0 || i == j {
					// 第一列和最后一列
					dp[i][j] = 1
				}else {
					// 状态转移方程 dp[i][j] = dp[i-1][j-1] + dp[i-1][j]
					dp[i][j] = dp[i-1][j-1] + dp[i-1][j]
				}
			}
		}
	}
	return dp
}
func main() {
	fmt.Println(generate(5)) // expect: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
	fmt.Println(generate(1)) // expect: [[1]]
}
